// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../utils/redis";
import { v4 as uuid } from "uuid";

type Data = {
	id: string;
	greetings: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const id = uuid();

	// const greetings = await redis.sad("greeting");

	res.status(200).json({ id: "", greetings: "" });
}
