import toast from 'react-hot-toast'

const useToast = () => {
  const toastSuccess = message => toast.success(message)

  const toastError = message => toast.error(message)

  const toastPromise = (promise, loading, success, error) => toast.promise(promise, { success, loading, error })

  return { toastSuccess, toastError, toastPromise }
}

export default useToast
