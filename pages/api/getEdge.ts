import type { NextRequest } from "next/server";
import redis from "../../utils/redis";

export const config = {
	runtime: "experimental-edge",
};

export default async function handler(req: NextRequest) {
	await redis.hget("greeting", "869dfe15-7dee-457f-a894-39416fab33e4");
	// console.log(greetings);

	return new Response(
		JSON.stringify({
			greetings: "hello",
		}),
		{
			status: 200,
			headers: {
				"content-type": "application/json",
			},
		}
	);
}
