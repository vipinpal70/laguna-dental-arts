// lib/zoho.ts

export interface ZohoLeadInput {
    firstName?: string;
    lastName?: string;
    name?: string;
    email: string;
    phone?: string;
    practiceName?: string;
    company?: string;
    interest?: string;
    message?: string;
    description?: string;
    leadSource?: string;
}

export async function getZohoAccessToken(): Promise<string> {
    const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
    const clientId = process.env.ZOHO_CLIENT_ID;
    const clientSecret = process.env.ZOHO_CLIENT_SECRET;
    const accountsUrl = process.env.ZOHO_ACCOUNTS_URL || "https://accounts.zoho.in";

    if (!refreshToken || !clientId || !clientSecret) {
        throw new Error(
            "Missing Zoho CRM credentials (ZOHO_REFRESH_TOKEN, ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET)."
        );
    }

    const res = await fetch(
        `${accountsUrl.replace(/\/$/, "")}/oauth/v2/token`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                refresh_token: refreshToken,
                client_id: clientId,
                client_secret: clientSecret,
                grant_type: "refresh_token",
            }),
        }
    );

    const data = await res.json();

    if (!res.ok || data.error) {
        throw new Error(`Zoho token error: ${data.error || res.statusText || "Unknown error"}`);
    }

    return data.access_token;
}

export async function createZohoLead(contact: ZohoLeadInput) {
    const accessToken = await getZohoAccessToken();

    const crmBaseUrl = process.env.ZOHO_CRM_API || "https://www.zohoapis.in/crm/v8";
    const endpoint = `${crmBaseUrl.replace(/\/$/, "")}/Leads`;

    // Map names: First_Name and Last_Name (Zoho requires Last_Name)
    let firstName = contact.firstName?.trim();
    let lastName = contact.lastName?.trim();

    if (!lastName && contact.name) {
        const parts = contact.name.trim().split(/\s+/);
        if (parts.length > 1) {
            firstName = firstName || parts.slice(0, -1).join(" ");
            lastName = parts[parts.length - 1];
        } else {
            lastName = parts[0];
        }
    }

    if (!lastName) {
        lastName = "Website Lead";
    }

    // Company is standard/required in standard Zoho Leads module
    const company =
        contact.practiceName?.trim() ||
        contact.company?.trim() ||
        [firstName, lastName].filter(Boolean).join(" ") ||
        "Dental Practice";

    // Format description from interest and message
    const descParts: string[] = [];
    if (contact.interest?.trim()) {
        descParts.push(`Interest: ${contact.interest.trim()}`);
    }
    if (contact.message?.trim()) {
        descParts.push(`Message:\n${contact.message.trim()}`);
    } else if (contact.description?.trim()) {
        descParts.push(`Description:\n${contact.description.trim()}`);
    }

    const leadRecord: Record<string, any> = {
        Last_Name: lastName,
        Email: contact.email?.trim(),
        Lead_Source: contact.leadSource || "Website",
        Company: company,
    };

    if (firstName) {
        leadRecord.First_Name = firstName;
    }

    if (contact.phone?.trim()) {
        leadRecord.Phone = contact.phone.trim();
    }

    if (descParts.length > 0) {
        leadRecord.Description = descParts.join("\n\n");
    }

    const res = await fetch(endpoint, {
        method: "POST",
        headers: {
            Authorization: `Zoho-oauthtoken ${accessToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: [leadRecord],
        }),
    });

    const result = await res.json();

    if (!res.ok) {
        console.error("Zoho CRM create lead response error:", res.status, result);
    } else {
        console.log("Zoho CRM lead created successfully:", result);
    }

    return result;
}