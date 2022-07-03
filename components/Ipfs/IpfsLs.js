import {
  Box,
  Button,
  List,
  ListIcon,
  ListItem,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { useLsCidQuery } from '../../app/bridgeApi'
import useMyToast from '../../hooks/useMyToast'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { IoSettings } from 'react-icons/io5'
import { v4 as uuid } from 'uuid'
import { IpfsCard } from './IpfsCard'
import { BezierSpinner } from '../Spinner/BezierSpinner'
import { reset } from '../../app/ipfsReduxSlice'
import { DopeAlter } from '../Alert/dopeAlert'
import { motion, AnimatePresence } from 'framer-motion'

export default function IpfsLs() {
  const store = useSelector((state) => state.ipfsRedux)
  const dispatch = useDispatch()
  const toast = useMyToast()
  const { data, error, isLoading, isError } = useLsCidQuery({ cid: store.cid })

  useEffect(() => {
    if (store.cid && isError) {
      toast('error', 'No files found related to this CID 💔', 'ipfsCidError')
      console.log('🚀 ~ file: IpfsLs.js ~ line 11 ~ IpfsLs ~ error', error)
      dispatch(reset)
    }
  }, [isError, dispatch, toast, error])

  return (
    <Box className="">
      <AnimatePresence>
        <motion.div
          initial={false}
          animate={store.cid ? 'visible' : 'hidden'}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: .5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 500 },
          }}
        >
          {isLoading ? (
            <BezierSpinner></BezierSpinner>
          ) : data && (
            <Box className="relative flex flex-col">
              <div className="sticky top-36">
                  <DopeAlter
                    headText="Upload Data"
                    bodyText="Select files for upload to Cortx."
                    color="aqua"
                    show={store.selectedIdx.length === 0} 
                  />
              </div>
              <div
                className="flex sm:flex-col overflow-x-scroll scrollbar-hide z-20"
              >
                {data.map((file, i) => {
                  return (
                    <IpfsCard ls={file} idx={i} key={uuid()} />
                  )
                })}
              </div>
            </Box>
          )}
        </motion.div>
      </AnimatePresence>
    </Box>
  )
}
