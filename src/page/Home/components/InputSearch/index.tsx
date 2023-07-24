import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { RegularText } from '../../../../components/Typography/RegularText'
import { TitleText } from '../../../../components/Typography/TitleText'

interface InputSearch {
  publicationAmount: number
  getPosts: (query: string) => Promise<void>
}

const inputSearchSchema = z.object({
  query: z.string(),
})

type InputSearchData = z.infer<typeof inputSearchSchema>

export function InputSearch({ publicationAmount, getPosts }: InputSearch) {
  const { register, handleSubmit } = useForm<InputSearchData>({
    resolver: zodResolver(inputSearchSchema),
    defaultValues: {
      query: '',
    },
  })

  function handleSearch(data: InputSearchData) {
    getPosts(data.query)
  }

  return (
    <form onSubmit={handleSubmit(handleSearch)}>
      <div className="flex items-center justify-between mb-3">
        <TitleText color="subtitle" size="sm">
          Publicações
        </TitleText>
        <RegularText color="span" size="sm">
          {publicationAmount} publicações
        </RegularText>
      </div>
      <input
        type="text"
        placeholder="Buscar Conteúdo"
        className={`
          w-full py-3 px-4 rounded-md bg-base-input border border-base-border placeholder:text-base-label
          outline-none focus:border-brand-blue`}
        {...register('query')}
      />
    </form>
  )
}
