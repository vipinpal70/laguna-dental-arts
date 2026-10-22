curl -X POST "https://accounts.zoho.in/oauth/v2/token" \
 --data-urlencode "grant_type=authorization_code" \
 --data-urlencode "client_id=1000.W0NRNGBTV2SARN6BZD1GKKFO12M1LK" \
 --data-urlencode "client_secret=37374a57b401078c7f9c2dd89fad834e0024da29cf" \
 --data-urlencode "redirect_uri=http://localhost:3000/callback" \
 --data-urlencode "code=1000.656c72ea0d12297159c187e55a884298.379a80eaa7c94986f53d47cefc8b7978"

https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.modules.ALL&client_id=1000.W0NRNGBTV2SARN6BZD1GKKFO12M1LK&response_type=code&access_type=offline&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&prompt=consent

http://localhost:3000/callback?code=1000.656c72ea0d12297159c187e55a884298.379a80eaa7c94986f53d47cefc8b7978&location=us&accounts-server=https%3A%2F%2Faccounts.zoho.com
