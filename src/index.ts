import { PrismaClient } from "@prisma/client/extension";
import { withAccelerate } from "@prisma/extension-accelerate";
export interface Env{
	DATABASE_URL:string
}
// id       Int    @id @default(autoincrement())
// name     String
// email    String
// password String
export default {
	async fetch(request, env, ctx): Promise<Response> {
		const prisma=new PrismaClient({
			datasourceUrl:env.DATABASE_URL,
		}).$extends(withAccelerate())
		const response=await prisma.log.create({
			data:{
				name:"hello WOrld",
				email:"hello@gmail.com",
				password:"123456"
			}
		})
		console.log(JSON.stringify(response))
		return new Response(`request method: ${request.method}!`)
		
	},
} satisfies ExportedHandler<Env>;
