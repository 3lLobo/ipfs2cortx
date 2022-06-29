import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'
import all from 'it-all'
import { listObjects } from '../lib/s3Util'

export const bridgeApi = createApi({
  reducerPath: 'bridgeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
  }),
  tagTypes: ['GET', 'POST'],
  endpoints: (build) => ({
    lsCid: build.query({
      async queryFn(args, _api, _extraOptions, fetch) {
        const { cid } = args
        try {
          const ipfs = window?.ipfsDaemon
          let response = await ipfs.ls(cid)
          const files = await all(response)
          return { data: files }
        } catch (err) {
          console.log(err)
          return { error: err }
        }
      },
    }),
    getCid: build.query({
      async queryFn(args, _api, _extraOptions, fetch) {
        const { cid } = args
        console.log('🚀 ~ file: bridgeApi.js ~ line 27 ~ queryFn ~ args', args)
        try {
          const ipfs = window?.ipfsDaemon
          let response = await ipfs.get(cid)
          const fileInfo = await all(response)
          console.log('🚀 ~ file: bridgeApi.js ~ line 30 ~ queryFn ~ response', file)

          return { data: fileInfo }
        } catch (err) {
          console.log(err)
          return { error: err }
        }
      },
    }),
    getBucketFiles: build.query({
      async queryFn(args, _api, _extraOptions, fetch) {
        const { bucket } = args
        try {
          const s3 = window?.s3
          let response = await (await listObjects(s3, bucket)).json
          console.log("🚀 ~ file: bridgeApi.js ~ line 49 ~ queryFn ~ response", response)
          const fileInfo = await all(response.objects)

          return { data: fileInfo }
        } catch (e) {
          console.err(e)
          return { error: e }
        }
      }
    }),
    postFiles2Bucket: build.mutation({
      // not sure about this
      async queryFn(args, _api, _extraOptions, fetch) {

        try {
          return
        } catch(e) {
          return
        }
      }
    })
  }),
})

export const { useLsCidQuery, useGetCidQuery, useLazyGetCidQuery } = bridgeApi
