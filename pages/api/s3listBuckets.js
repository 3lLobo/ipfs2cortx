// S3 call to list Buckets

import { createS3, listBucket } from "../../lib/s3Util"

export default async function handler(req, res) {

    const s3 = await createS3()
    try {
        let buckets = await listBucket(s3)
        res.status(200).json({ buckets })
    } catch (e) {
        res.status(500).json({ error: e })
    }
}
