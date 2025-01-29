import swal from 'sweetalert'

export function useFlash() {
  function flash(title, message, icon) {
    return swal(title, message, icon)
  }

  return { flash }
}
