
// Response from /lib/cortx-s3.js
const s3Res = [
  // Creating a bucket...
  {},
  // Listing buckets...
  {
    Buckets: [
      { Name: 'area51', CreationDate: 2022 - 06 - 29T20: 49: 27.426Z },
      { Name: 'ipfsbucket', CreationDate: 2022 - 06 - 29T20: 42: 12.309Z },
      { Name: 'mybucket', CreationDate: 2022 - 06 - 28T05: 45: 59.104Z },
      { Name: 'planets', CreationDate: 2022 - 06 - 29T20: 51: 26.690Z }
    ],
    Owner: { DisplayName: 'user_name', ID: 'user_name' }
  },
  // Putting an object...
  { ETag: '"46daf114cabfa572411a88bf19d36d6b"' },
  // Getting an object...
  {
    AcceptRanges: 'bytes',
    LastModified: 2022 - 06 - 29T20: 51: 26.000Z,
    ContentLength: 22,
    ETag: '"46daf114cabfa572411a88bf19d36d6b"',
    ContentType: 'binary/octet-stream',
    Metadata: {},
    Body: Buffer(22)[Uint8Array][
      46, 46, 46, 115, 111, 109, 101,
      32, 114, 97, 110, 100, 111, 109,
      32, 100, 97, 116, 97, 46, 46,
      46
    ]
  },
  // Listing objects...
  {
    IsTruncated: false,
    Marker: '',
    Contents: [
      {
        Key: 'pluto.txt',
        LastModified: 2022 - 06 - 29T20: 51: 26.990Z,
        ETag: '"46daf114cabfa572411a88bf19d36d6b"',
        ChecksumAlgorithm: [],
        Size: 22,
        StorageClass: 'STANDARD',
        Owner: [Object]
      }
    ],
    Name: 'planets',
    Prefix: '',
    MaxKeys: 1000,
    CommonPrefixes: []
  }
]