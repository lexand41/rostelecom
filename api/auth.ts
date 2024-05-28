import { createEffect } from 'effector'
import toast from 'react-hot-toast'
import api from './apiInstance'
import { ISignUpFx } from '@/types/authPopup'
import { onAuthSuссess } from '@/lib/utils/auth'

export const singUpFx = createEffect(
  async ({ name, password, email }: ISignUpFx) => {
    const { data } = await api.post('api/users/signup', {
      name,
      password,
      email,
    })

    console.log(41)

    if (data.warningMessage) {
      toast.error(data.warningMessage)
      return
    }

    onAuthSuссess('Регистрация прошла успешно', data)

    return data
  }
)

export const singInFx = createEffect(async ({ email, password }: ISignUpFx) => {
  const { data } = await api.post('api/users/login', { email, password })

  if (data.warningMessage) {
    toast.error(data.warningMessage)
    return
  }

  onAuthSuссess('Вход выполнен!', data)

  return data
})
