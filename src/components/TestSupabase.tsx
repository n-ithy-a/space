import { useEffect } from 'react'
import { supabase } from '../lib/supabase'

export function TestSupabase() {
  useEffect(() => {
    const test = async () => {
      const { data, error } = await supabase
        .from('customer_enquiries')
        .select('*')

      console.log('DATA:', data)
      console.log('ERROR:', error)
    }

    test()
  }, [])

  return <div>Check console</div>
}

