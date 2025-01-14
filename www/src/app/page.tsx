import CodeSection from '@/components/CodeSection'
import Demo from '@/components/Demo'
import { Icons } from '@/components/Icons'
import YoutubePlayer from '@/components/YoutubePlayer'
import { redis } from '@/lib/redis'
import { cn } from '@/lib/utils'
import { Check, Star } from 'lucide-react'
import localFont from 'next/font/local'

const fontScary = localFont({
  src: '../assets/Scary.ttf',
})

export default async function Home() {
  const requests = await redis.get('served-requests')
  return (
    <div className='bg-blue-50 grainy-light'>
      <div className='relative overflow-hidden'>
        <div className='mx-auto max-w-7xl pb-24 pt-10 sm:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-8 lg:px-8 lg:pt-32 lg:pb-52'>
          <div className='px-6 lg:px-0 lg:pt-4'>
            <div className='mx-auto max-w-lg text-center sm:text-left flex flex-col items-center lg:items-start'>
              <h1
                className={cn(
                  'relative tracking-tight sm:text-left mt-10 font-bold !leading-[4rem] text-gray-900 text-5xl md:text-7xl'
                )}>
                <span className='whitespace-nowrap'>
                  SafeBoard
                </span>
              </h1>
              <p className='mt-8 text-lg lg:pr-10 text-center lg:text-left text-balance md:text-wrap'>
                Detecting toxic content has always been{' '}
                <span
                  className={cn(
                    'font-scary font-bold text-red-500',
                    fontScary.className
                  )}>
                  slow
                </span>{' '}
                and{' '}
                <span
                  className={cn(
                    'font-scary font-bold text-red-500',
                    fontScary.className
                  )}>
                  expensive
                </span>
                . Not anymore. Introducing a fast and free
                profanity filter for your web apps.
              </p>

              <ul className='mt-8 space-y-2 font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Check className='h-5 w-5 shrink-0 text-red-500' /> Much
                    faster and cheaper to run than AI
                  </li>
                  <li className='flex gap-1.5 items-center'>
                    <Check className='h-5 w-5 shrink-0 text-red-500' /> Pretty accurate
                  </li>
                  <li className='flex gap-1.5 items-center'>
                    <Check className='h-5 w-5 shrink-0 text-red-500' /> 100%
                    free & open-source
                  </li>
                </div>
              </ul>
            </div>
          </div>

          <div className='relative px-8 sm:px-16 md:px-0 mt-28 md:mx-auto md:max-w-xl w-full lg:mx-0 lg:mt-20'>
            <img
              alt='try-it'
              aria-hidden='true'
              src='/try-it.png'
              className='absolute w-40 left-2/3 -top-2 select-none hidden sm:block'
            />
            <Demo />
          </div>
        </div>
        <div className='absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32' />
      </div>

      <section className='bg-blue-100 grainy-dark px-4'>
        <div className='mx-auto max-w-6xl gap-6 pb-24 pt-20 sm:pb-32 lg:gap-x-8 lg:px-8 lg:py-40'>
          <div className='w-full flex flex-col'>
            <div className='flex justify-center text-center'>
              <h2 className='font-heading text-5xl lg:text-6xl font-bold leading-tight text-balance sm:leading-none tracking-tight'>
                "Hate speech{' '}
                <span className='bg-red-500 text-white font-scary px-3'>
                  f@#k!ng
                </span>{' '}
                sucks"
              </h2>
            </div>
            <p className='mx-auto mt-8 text-center text-sm max-w-xl'>
              - guy from my discord (i forgot who 💀)
            </p>

            {/* <Icons.arrow className='h-60 -mt-4 text-zinc-400 fill-zinc-400 pointer-events-none select-none' /> */}

            <p></p>

            <p className='text-center mx-auto mt-12 text-lg max-w-xl text-balance'>
              <span className='font-semibold'>
                Moderating profanity is a thankless job.
              </span>{' '}
              If you run a web app with any kind of user generated content, it's
              your responsibility to keep things in order. That's a challenge if
              your users keep dropping F-bombs like confetti at a toddler's
              birthday party.
            </p>

            <Icons.arrow className='h-60 -mt-4 text-zinc-400 fill-zinc-400 pointer-events-none select-none' />

            <p className='mt-6 sm:mt-12 z-10 text-center mx-auto text-3xl font-semibold'>
              Profanity on your website...
            </p>

            <div className='grid gap-40 sm:grid-cols-2 sm:gap-16 max-w-3xl mx-auto mt-40 text-center'>
              <div className='relative z-10'>
                <div className='absolute -z-10 left-1/2 -translate-x-1/2 -top-[90px]'>
                  <div className='absolute inset-x-0 -bottom-0 h-16 bg-gradient-to-t 0 from-blue-100 pointer-events-none'></div>
                  <img
                    alt='shocked-emoji'
                    src='/shocked-emoji.png'
                    className='h-24 relative -z-10 select-none'
                  />
                </div>
                <p className='font-semibold text-lg'>
                  ...scares away new visitors
                </p>
                <p className='mt-2 text-balance'>
                  Imagine your ideal customer waddling through a minefield of
                  four-letter words to find your amazing product. Not exactly a
                  recipe for conversion is it??
                </p>
              </div>

              <div className='relative z-10'>
                <div className='absolute -z-10 left-1/2 -translate-x-1/2 -top-[90px]'>
                  <div className='absolute inset-x-0 -bottom-0 h-16 bg-gradient-to-t from-blue-100 pointer-events-none'></div>
                  <img
                    alt='swear-emoji'
                    src='/swear-emoji.png'
                    className='relative -z-10 h-24 select-none'
                  />
                </div>
                <p className='font-semibold text-lg'>...makes you look bad</p>
                <p className='mt-2 text-balance'>
                  Your sweet grandma wants to see what her sunshine is doing on
                  the internet and stumbles upon your website. Do you really
                  need her to put on a{' '}
                  <span className='font-semibold text-red-600'>
                    hazmat suit
                  </span>{' '}
                  first?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
