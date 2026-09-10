import { ObjectId, type Collection, type Document } from "mongodb";
import clientPromise from "@/lib/mongodb";

const DB_NAME = process.env.MONGODB_DB || "laguna_dental_labs";
const COLLECTION = "contacts";

export interface Lead {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  practiceName?: string;
  interest?: string;
  message?: string;
  status?: string;
  createdAt?: string;
}

export interface LeadInput {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  practiceName?: string;
  interest?: string;
  message?: string;
}

async function getCollection(): Promise<Collection<Document>> {
  const client = await clientPromise;
  return client.db(DB_NAME).collection(COLLECTION);
}

function serialize(doc: Document | null): Lead | null {
  if (!doc) return null;
  const { _id, createdAt, ...rest } = doc;
  return {
    _id: _id?.toString(),
    createdAt: createdAt instanceof Date ? createdAt.toISOString() : createdAt,
    ...rest,
  } as Lead;
}

/** Persist a new contact-form lead into the `contacts` collection. */
export async function createLead(data: LeadInput): Promise<Lead> {
  const col = await getCollection();
  const now = new Date();
  const doc = {
    firstName: (data.firstName || "").trim(),
    lastName: (data.lastName || "").trim(),
    email: (data.email || "").trim(),
    phone: (data.phone || "").trim(),
    practiceName: (data.practiceName || "").trim(),
    interest: (data.interest || "").trim(),
    message: (data.message || "").trim(),
    status: "new",
    createdAt: now,
  };
  const result = await col.insertOne(doc);
  return serialize({ _id: result.insertedId, ...doc })!;
}

/** Fetch all leads, newest first (admin). */
export async function getAllLeads(): Promise<Lead[]> {
  const col = await getCollection();
  const docs = await col.find({}).sort({ createdAt: -1 }).toArray();
  return docs.map((d) => serialize(d)!);
}

export async function deleteLead(id: string): Promise<boolean> {
  if (!ObjectId.isValid(id)) return false;
  const col = await getCollection();
  const result = await col.deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount > 0;
}
