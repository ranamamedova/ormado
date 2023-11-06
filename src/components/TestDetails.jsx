import React, { useRef, useState } from 'react'
import Image from '../assets/img/Image.png'
import quotes from '../assets/img/Quotes.svg'

const TestDetails = () => {
  const [count, setCount] = useState(0);
  const data = [
    {
      text:
        'Quisquam similique molestiae quia quod dolorum et. Aliquid blanditiis voluptatem maxime qui et voluptas minus. Nonprovident pariatur nisi. Repellat voluptas culpa eius.',
      img: Image,
      name: "Byron Rolfson",
      special: "Regional Solutions Architect"

    },
    {
      text:
        'Asperiores voluptatum explicabo vel maxime et consequuntur eveniet nobis. Tempore aperiam dolor aut molestiae soluta modi ut. Hic aspernatur ea uam...',
      img: Image,
      name: " Rolfson",
      special: " Solutions Architect"

    },
    {
      text:
        'Omnis velit quia. Perspiciatis et cupiditate. Voluptatum beatae asperiores dolor magnam fuga. Sed fuga est harum quo nesciunt sint. Optio veniam...',
      img: Image,
      name: "Byron ",
      special: "Regional  Architect"
    },
  ]

  const itemTags = useRef([null, null, null])


  const next = () => {   
    if (count < data.length - 1) {
      setCount(count + 1)
      if (itemTags.current[1]) {
        itemTags.current[1].classList.add('active', 'transition-up')
      }
    } else {
      setCount(0)
    }
  }

  const prev = () => {
    if (count > 0) {
      setCount(count - 1)
      if (itemTags.current[1]) {
        itemTags.current[1].classList.add('active', 'transition')
      }
    }
     else {
      setCount(data.length - 1)
    }
  }

  return (
    <>
      <div className="slider">
        <div className="slide-con">
          <div className="row">
            <div className=" col-12 col-lg-6 col-md-12 left-col-12 ">
              <div className='d-flex  align-items-center'>
                <div className="btn-groups">
                  <button onClick={next}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 49 49"
                      fill="none"
                    >
                      <path
                        d="M24.4376 20.8854L11.612 34.2263C11.2597 34.5936 10.7887 34.7957 10.2864 34.7957C9.7839 34.7957 9.31314 34.5936 8.96028 34.2263L7.83703 33.0573C7.48361 32.6905 7.28907 32.2003 7.28907 31.6778C7.28907 31.1553 7.48361 30.6656 7.83703 30.2986L23.107 14.4141C23.461 14.0456 23.934 13.8438 24.4368 13.8452C24.9418 13.8438 25.4143 14.0453 25.7685 14.4141L41.0238 30.2838C41.3772 30.6509 41.5717 31.1405 41.5717 31.6633C41.5717 32.1858 41.3772 32.6755 41.0238 33.0428L39.9005 34.2115C39.1694 34.972 37.9793 34.972 37.2485 34.2115L24.4376 20.8854Z"
                        fill="#E3B142"
                      />
                    </svg>
                  </button>
                  <button onClick={prev}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 49 49"
                      fill="none"
                    >
                      <path
                        d="M24.4139 28.1185L37.2395 14.7776C37.5918 14.4103 38.0629 14.2082 38.5651 14.2082C39.0677 14.2082 39.5384 14.4103 39.8913 14.7776L41.0145 15.9466C41.3679 16.3134 41.5625 16.8037 41.5625 17.3261C41.5625 17.8486 41.368 18.3383 41.0145 18.7053L25.7445 34.5898C25.3906 34.9583 24.9176 35.1601 24.4148 35.1587C23.9097 35.1601 23.4373 34.9586 23.083 34.5898L7.8278 18.7201C7.47438 18.3531 7.27984 17.8634 7.27984 17.3406C7.27984 16.8182 7.47438 16.3285 7.8278 15.9611L8.95105 14.7924C9.68213 14.0319 10.8723 14.0319 11.6031 14.7924L24.4139 28.1185Z"
                        fill="#E3B142"
                      />
                    </svg>
                  </button>
                </div>
                <div className="left">

                  {itemTags.current.map((item, index) => (
                    <div
                      className={`item ${index === 1 ? 'active' : ''}`}
                      key={index}
                      ref={(ref) => (itemTags.current[index] = ref)}
                    >
                      <img src={quotes} alt="" />
                      <p>{data[(count + index) % data.length].text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className=" col-12 col-lg-6 col-md-12 right-col-12">
              <div className="right">
                <img src={data[count].img} alt="" />
                <div className="name">
                  <h2>{data[count].name}</h2>
                  <p>{data[count].special}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default TestDetails
