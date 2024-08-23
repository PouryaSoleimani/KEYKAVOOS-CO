import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import AzureADProvider from "next-auth/providers/azure-ad";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SECRET_ID as string,
    }),
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID as string,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
      tenantId: process.env.AZURE_AD_TENANT_ID as string,
      authorization: {
        params: { scope: "openid email profile User.Read" },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // IMPORTANT: Persist the access_token to the token right after sign in
      if (account) {
        token.idToken = account.id_token;
      }
      return token;
    },
  },
  secret: "62d67d70ec48144ff98e8fedc1b0c9c8311f4baee190853a29a2bff7fcd69add",
  debug: true,
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
