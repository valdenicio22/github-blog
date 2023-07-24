import { Link } from 'react-router-dom'
import { RegularText } from '../Typography/RegularText'
import { TitleText } from '../Typography/TitleText'

export function Post() {
  return (
    <Link
      to="/post/1"
      className="flex flex-col gap-5 w-[26rem] h-[16.25rem] p-8 rounded-[10px] bg-base-post border-2 border-base-post hover:border-base-label"
    >
      <div className="flex items-start justify-between gap-4">
        <TitleText size="md" as="h3" className="flex-1 line-clamp-2">
          JavaScript data types and data structures JavaScript data types and
          data structures
        </TitleText>
        <RegularText color="span" size="sm" className="pt-2 max-w-max">
          Há 1 dia
        </RegularText>
      </div>
      <RegularText className="line-clamp-4 text-ellipsis">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn. Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in
        JavaScript are not directly associated with any particular value type,
        and any variable can be assigned (and re-assigned) values of all types:
        let foo = 42; // foo is now a number foo = &apos;bar&apos; // foo is now
        a string foo = true; // foo is now a boolean
      </RegularText>
    </Link>
  )
}
