import { FetchError } from 'ofetch'
import useSWR from 'swr'
import { getPremiumActivation, validatePremium } from '~services/premium'

export function usePremium() {


  return {
    activated: true,
    isLoading: false,
    error: undefined
  }
}
