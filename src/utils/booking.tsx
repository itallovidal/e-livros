import {
  Bookingcontainer,
  BookingImage,
  BookingSection,
  ElementsContainer,
} from './openLibrary/bookingStyle.ts'
import { BookBookmark, X } from 'phosphor-react'
import { Button } from '../components/button.tsx'
import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { IAboutBook } from '../@types/openLibary'
import { aboutBook } from './openLibrary/aboutBook.ts'
import { fetchBookCover } from './openLibrary/fetchBookCover.ts'
import { useParams } from 'react-router-dom'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export function Booking({ img, title, mod }) {
  const [value, onChange] = useState<Value>(new Date())
  // const [book, setBook] = useState<IAboutBook>({} as IAboutBook)
  //
  // const { id } = useParams() as { id: string }
  //
  // async function fetchAboutBook() {
  //   const bookData = await aboutBook(id)
  //   const img = await fetchBookCover(bookData.covers[0])
  //
  //   setBook({
  //     ...bookData,
  //     img,
  //   })
  // }
  // useEffect(() => {
  //   fetchAboutBook()
  // }, [id])

  return (
    <Bookingcontainer>
      <BookingSection>
        <div className={'header'}>
          <h1 className={'title'}>Reserva</h1>
          <Button variant={'transparent'} onClick={mod}>
            <X size={32} />
          </Button>
        </div>
        <ElementsContainer>
          <BookingImage>
            <img alt={'book'} src={img} />
            <label htmlFor="">{title}</label>
          </BookingImage>
          <div className={'containers_btns'}>
            <Calendar
              onChange={onChange}
              value={value}
              className={'calendar'}
            />
            <Button variant={'blue'}>
              Reservar
              <BookBookmark size={32} />
            </Button>
          </div>
        </ElementsContainer>
      </BookingSection>
    </Bookingcontainer>
  )
}
