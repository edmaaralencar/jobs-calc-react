type LogoProps = {
  color?: 'white' | 'black'
  size?: 'small' | 'big'
}

const Logo = ({ color = 'white', size = 'big' }: LogoProps) => {
  return (
    <>
      {size === 'big' ? (
        <svg
          width="208"
          height="48"
          viewBox="0 0 208 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color === 'white' ? '#FCFDFF' : '#6D6D80'}
        >
          <path
            d="M82.83 12.4521V29.8085C82.83 30.8918 82.6507 31.8715 82.292 32.7473C81.9557 33.6232 81.4625 34.3723 80.8123 34.9947C80.1846 35.617 79.4112 36.1011 78.492 36.4468C77.5728 36.7926 76.5416 36.9654 75.3982 36.9654C73.2236 36.9654 71.531 36.3892 70.3203 35.2367C69.1097 34.0612 68.3363 32.5053 68 30.5691L72.1026 29.7048C72.3044 30.742 72.6631 31.5488 73.1787 32.125C73.7168 32.6782 74.4454 32.9548 75.3646 32.9548C76.2389 32.9548 76.9563 32.6782 77.5168 32.125C78.0997 31.5488 78.3911 30.6729 78.3911 29.4973V16.1862H70.9929V12.4521H82.83Z"
            fill="currentColor"
          />
          <path
            d="M94.8999 37C93.6445 37 92.5123 36.781 91.5035 36.3431C90.5171 35.9051 89.6651 35.2713 88.9477 34.4415C88.2528 33.6117 87.7147 32.6206 87.3336 31.4681C86.9525 30.2926 86.7619 28.9787 86.7619 27.5266C86.7619 26.0745 86.9525 24.7722 87.3336 23.6197C87.7147 22.4672 88.2528 21.4876 88.9477 20.6809C89.6651 19.8511 90.5171 19.2172 91.5035 18.7793C92.5123 18.3413 93.6445 18.1223 94.8999 18.1223C96.1554 18.1223 97.2875 18.3413 98.2964 18.7793C99.3052 19.2172 100.157 19.8511 100.852 20.6809C101.57 21.4876 102.119 22.4672 102.5 23.6197C102.881 24.7722 103.072 26.0745 103.072 27.5266C103.072 28.9787 102.881 30.2926 102.5 31.4681C102.119 32.6206 101.57 33.6117 100.852 34.4415C100.157 35.2713 99.3052 35.9051 98.2964 36.3431C97.2875 36.781 96.1554 37 94.8999 37ZM94.8999 33.4388C96.0433 33.4388 96.9401 33.0816 97.5902 32.367C98.2403 31.6525 98.5654 30.6037 98.5654 29.2207V25.867C98.5654 24.5071 98.2403 23.4699 97.5902 22.7553C96.9401 22.0408 96.0433 21.6835 94.8999 21.6835C93.779 21.6835 92.8935 22.0408 92.2433 22.7553C91.5932 23.4699 91.2681 24.5071 91.2681 25.867V29.2207C91.2681 30.6037 91.5932 31.6525 92.2433 32.367C92.8935 33.0816 93.779 33.4388 94.8999 33.4388Z"
            fill="currentColor"
          />
          <path
            d="M106.888 11H111.192V21.5106H111.327C111.64 20.4734 112.234 19.6551 113.109 19.0559C113.983 18.4335 115.003 18.1223 116.169 18.1223C118.411 18.1223 120.115 18.9406 121.28 20.5771C122.469 22.1906 123.063 24.5071 123.063 27.5266C123.063 30.5691 122.469 32.9087 121.28 34.5452C120.115 36.1817 118.411 37 116.169 37C115.003 37 113.983 36.6888 113.109 36.0665C112.257 35.4441 111.663 34.6144 111.327 33.5771H111.192V36.5851H106.888V11ZM114.79 33.3351C115.911 33.3351 116.819 32.9548 117.514 32.1941C118.209 31.4335 118.557 30.4078 118.557 29.117V26.0053C118.557 24.7145 118.209 23.6888 117.514 22.9282C116.819 22.1445 115.911 21.7527 114.79 21.7527C113.759 21.7527 112.896 22.0177 112.201 22.5479C111.528 23.078 111.192 23.781 111.192 24.6569V30.3963C111.192 31.3413 111.528 32.0674 112.201 32.5745C112.896 33.0816 113.759 33.3351 114.79 33.3351Z"
            fill="currentColor"
          />
          <path
            d="M132.802 37C131.12 37 129.708 36.7119 128.565 36.1356C127.421 35.5363 126.412 34.7181 125.538 33.6809L128.161 31.0532C128.811 31.8138 129.517 32.4131 130.28 32.8511C131.064 33.289 131.961 33.508 132.97 33.508C134.001 33.508 134.741 33.3236 135.189 32.9548C135.66 32.586 135.896 32.0789 135.896 31.4335C135.896 30.9034 135.727 30.4885 135.391 30.1888C135.077 29.8661 134.528 29.6472 133.743 29.5319L131.995 29.2899C130.089 29.0363 128.632 28.4832 127.623 27.6303C126.637 26.7544 126.143 25.4867 126.143 23.8271C126.143 22.9512 126.3 22.1676 126.614 21.4761C126.928 20.7615 127.376 20.1622 127.959 19.6782C128.542 19.1711 129.237 18.7908 130.044 18.5372C130.874 18.2606 131.793 18.1223 132.802 18.1223C133.654 18.1223 134.405 18.1915 135.055 18.3298C135.727 18.445 136.333 18.6294 136.871 18.883C137.409 19.1135 137.902 19.4131 138.35 19.7819C138.799 20.1277 139.236 20.5195 139.662 20.9574L137.14 23.5505C136.624 22.9973 136.008 22.5363 135.29 22.1676C134.573 21.7988 133.788 21.6144 132.936 21.6144C131.995 21.6144 131.311 21.7872 130.885 22.133C130.481 22.4787 130.28 22.9282 130.28 23.4814C130.28 24.0807 130.448 24.5417 130.784 24.8644C131.143 25.164 131.737 25.383 132.566 25.5213L134.349 25.7633C138.137 26.3165 140.032 28.0913 140.032 31.0878C140.032 31.9637 139.853 32.7704 139.494 33.508C139.158 34.2225 138.676 34.8449 138.048 35.375C137.42 35.8821 136.658 36.2855 135.761 36.5851C134.887 36.8617 133.9 37 132.802 37Z"
            fill="currentColor"
          />
          <path
            d="M153.215 37C151.668 37 150.267 36.7465 149.011 36.2394C147.778 35.7092 146.713 34.9255 145.817 33.8883C144.942 32.8511 144.27 31.5718 143.799 30.0505C143.328 28.5062 143.093 26.7199 143.093 24.6915C143.093 22.6631 143.328 20.8652 143.799 19.2979C144.27 17.7074 144.942 16.3821 145.817 15.3218C146.713 14.2385 147.778 13.4202 149.011 12.867C150.267 12.3138 151.668 12.0372 153.215 12.0372C155.322 12.0372 157.071 12.4982 158.461 13.4202C159.851 14.3422 160.961 15.7367 161.79 17.6037L157.99 19.6782C157.654 18.5949 157.105 17.7305 156.342 17.0851C155.58 16.4167 154.538 16.0824 153.215 16.0824C151.556 16.0824 150.233 16.6587 149.247 17.8112C148.283 18.9637 147.801 20.5771 147.801 22.6516V26.4548C147.801 28.5523 148.283 30.1658 149.247 31.2952C150.233 32.4016 151.556 32.9548 153.215 32.9548C154.538 32.9548 155.614 32.586 156.443 31.8484C157.295 31.1108 157.912 30.2004 158.293 29.117L161.891 31.2952C161.039 33.0931 159.907 34.4991 158.495 35.5133C157.082 36.5044 155.322 37 153.215 37Z"
            fill="currentColor"
          />
          <path
            d="M178.322 36.5851C177.38 36.5851 176.629 36.3085 176.069 35.7553C175.531 35.1791 175.194 34.4184 175.06 33.4734H174.858C174.567 34.6489 173.973 35.5363 173.076 36.1356C172.179 36.7119 171.069 37 169.747 37C167.953 37 166.574 36.516 165.61 35.5479C164.646 34.5798 164.164 33.289 164.164 31.6755C164.164 29.8085 164.814 28.4255 166.115 27.5266C167.415 26.6046 169.265 26.1436 171.663 26.1436H174.656V24.8298C174.656 23.8156 174.399 23.0319 173.883 22.4787C173.367 21.9255 172.538 21.6489 171.394 21.6489C170.386 21.6489 169.567 21.8794 168.94 22.3404C168.334 22.7784 167.819 23.3085 167.393 23.9309L164.837 21.5798C165.487 20.5426 166.35 19.7128 167.426 19.0904C168.502 18.445 169.926 18.1223 171.697 18.1223C174.073 18.1223 175.878 18.6755 177.111 19.7819C178.344 20.8883 178.961 22.4787 178.961 24.5532V33.0585H180.709V36.5851H178.322ZM171.193 33.7846C172.157 33.7846 172.975 33.5656 173.647 33.1277C174.32 32.6897 174.656 32.0443 174.656 31.1915V28.8059H171.899C169.657 28.8059 168.536 29.5434 168.536 31.0186V31.6064C168.536 32.344 168.76 32.8972 169.209 33.266C169.679 33.6117 170.341 33.7846 171.193 33.7846Z"
            fill="currentColor"
          />
          <path
            d="M188.497 36.5851C187.018 36.5851 185.931 36.2048 185.236 35.4441C184.541 34.6835 184.193 33.6117 184.193 32.2287V11H188.497V33.0585H190.818V36.5851H188.497Z"
            fill="currentColor"
          />
          <path
            d="M201.005 37C199.705 37 198.55 36.781 197.542 36.3431C196.533 35.9051 195.681 35.2713 194.986 34.4415C194.313 33.6117 193.798 32.6206 193.439 31.4681C193.08 30.2926 192.901 28.9787 192.901 27.5266C192.901 26.0745 193.08 24.7722 193.439 23.6197C193.798 22.4672 194.313 21.4876 194.986 20.6809C195.681 19.8511 196.533 19.2172 197.542 18.7793C198.55 18.3413 199.705 18.1223 201.005 18.1223C202.776 18.1223 204.234 18.5257 205.377 19.3324C206.543 20.1392 207.383 21.2571 207.899 22.6862L204.368 24.3112C204.166 23.5505 203.785 22.9282 203.225 22.4441C202.687 21.9371 201.947 21.6835 201.005 21.6835C199.795 21.6835 198.887 22.0754 198.281 22.859C197.699 23.6427 197.407 24.6684 197.407 25.9362V29.2207C197.407 30.4885 197.699 31.5142 198.281 32.2979C198.887 33.0585 199.795 33.4388 201.005 33.4388C202.037 33.4388 202.832 33.1738 203.393 32.6436C203.953 32.0904 204.391 31.4105 204.704 30.6037L208 32.2287C207.417 33.8191 206.532 35.0177 205.343 35.8245C204.155 36.6082 202.709 37 201.005 37Z"
            fill="currentColor"
          />
          {/* </Box> */}

          {/* Small logo */}
          <path
            d="M41.3438 0H4.21875C1.89253 0 0 1.89253 0 4.21875V41.3438C0 43.67 1.89253 45.5625 4.21875 45.5625H31.9688C32.3418 45.5625 32.6994 45.4143 32.9631 45.1506L45.1506 32.9631C45.4144 32.6993 45.5625 32.3417 45.5625 31.9688V4.21875C45.5625 1.89253 43.67 0 41.3438 0Z"
            fill="#6D6D80"
          />
          <path
            d="M22.7812 0H4.21875C1.89253 0 0 1.89253 0 4.21875V22.7812H22.7812V0Z"
            fill="#6D6D80"
          />
          <path
            d="M45.5625 22.7812V4.21875C45.5625 1.89253 43.67 0 41.3438 0H22.7812V22.7812H45.5625Z"
            fill="#575766"
          />
          <path
            d="M22.7812 22.7812V45.5625H31.9688C32.3418 45.5625 32.6994 45.4143 32.9631 45.1506L45.1506 32.9631C45.4144 32.6993 45.5625 32.3417 45.5625 31.9688V22.7812H22.7812ZM44.1562 31.9688H44.1572H44.1562Z"
            fill="#414141"
          />
          <path
            d="M0 22.7812V41.3438C0 43.67 1.89253 45.5625 4.21875 45.5625H22.7812V22.7812H0Z"
            fill="#575766"
          />
          <path
            d="M14.6719 9.98438H12.7969V8.10938C12.7969 7.33275 12.1673 6.70312 11.3906 6.70312C10.614 6.70312 9.98438 7.33275 9.98438 8.10938V9.98438H8.10938C7.33275 9.98438 6.70312 10.614 6.70312 11.3906C6.70312 12.1673 7.33275 12.7969 8.10938 12.7969H9.98438V14.6719C9.98438 15.4485 10.614 16.0781 11.3906 16.0781C12.1673 16.0781 12.7969 15.4485 12.7969 14.6719V12.7969H14.6719C15.4485 12.7969 16.0781 12.1673 16.0781 11.3906C16.0781 10.614 15.4485 9.98438 14.6719 9.98438Z"
            fill="#FCFDFF"
          />
          <path
            d="M37.4531 12.7969H30.8906C30.114 12.7969 29.4844 12.1673 29.4844 11.3906C29.4844 10.614 30.114 9.98438 30.8906 9.98438H37.4531C38.2297 9.98438 38.8594 10.614 38.8594 11.3906C38.8594 12.1673 38.2297 12.7969 37.4531 12.7969Z"
            fill="#FCFDFF"
          />
          <path
            d="M13.3793 34.1719L14.7287 32.8224C15.2779 32.2733 15.2779 31.3829 14.7287 30.8337C14.1796 30.2845 13.2892 30.2845 12.74 30.8337L11.3906 32.1832L10.0412 30.8337C9.49206 30.2845 8.60163 30.2845 8.05244 30.8337C7.50325 31.3829 7.50325 32.2733 8.05244 32.8224L9.40187 34.1719L8.05244 35.5213C7.50325 36.0705 7.50325 36.9609 8.05244 37.51C8.32703 37.7846 8.68694 37.922 9.04675 37.922C9.40656 37.922 9.76656 37.7847 10.0411 37.51L11.3905 36.1606L12.7399 37.51C13.0145 37.7846 13.3744 37.922 13.7342 37.922C14.0941 37.922 14.4541 37.7847 14.7286 37.51C15.2777 36.9609 15.2777 36.0705 14.7286 35.5213L13.3793 34.1719Z"
            fill="#FCFDFF"
          />
          <path
            d="M33.4688 48C25.4561 48 18.9375 41.4813 18.9375 33.4688C18.9375 25.4562 25.4561 18.9375 33.4688 18.9375C41.4814 18.9375 48 25.4562 48 33.4688C48 41.4813 41.4814 48 33.4688 48Z"
            fill="#F1972C"
          />
          <path
            d="M36.75 37.6875H30.1875C29.4109 37.6875 28.7812 37.0579 28.7812 36.2812C28.7812 35.5046 29.4109 34.875 30.1875 34.875H36.75C37.5266 34.875 38.1562 35.5046 38.1562 36.2812C38.1562 37.0579 37.5266 37.6875 36.75 37.6875Z"
            fill="#FCFDFF"
          />
          <path
            d="M36.75 32.0625H30.1875C29.4109 32.0625 28.7812 31.4329 28.7812 30.6562C28.7812 29.8796 29.4109 29.25 30.1875 29.25H36.75C37.5266 29.25 38.1562 29.8796 38.1562 30.6562C38.1562 31.4329 37.5266 32.0625 36.75 32.0625Z"
            fill="#FCFDFF"
          />
        </svg>
      ) : (
        <svg
          width="208"
          height="48"
          viewBox="0 0 208 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color={color === 'white' ? '#FCFDFF' : '#6D6D80'}
        >
          <path
            d="M41.3438 0H4.21875C1.89253 0 0 1.89253 0 4.21875V41.3438C0 43.67 1.89253 45.5625 4.21875 45.5625H31.9688C32.3418 45.5625 32.6994 45.4143 32.9631 45.1506L45.1506 32.9631C45.4144 32.6993 45.5625 32.3417 45.5625 31.9688V4.21875C45.5625 1.89253 43.67 0 41.3438 0Z"
            fill="#6D6D80"
          />
          <path
            d="M22.7812 0H4.21875C1.89253 0 0 1.89253 0 4.21875V22.7812H22.7812V0Z"
            fill="#6D6D80"
          />
          <path
            d="M45.5625 22.7812V4.21875C45.5625 1.89253 43.67 0 41.3438 0H22.7812V22.7812H45.5625Z"
            fill="#575766"
          />
          <path
            d="M22.7812 22.7812V45.5625H31.9688C32.3418 45.5625 32.6994 45.4143 32.9631 45.1506L45.1506 32.9631C45.4144 32.6993 45.5625 32.3417 45.5625 31.9688V22.7812H22.7812ZM44.1562 31.9688H44.1572H44.1562Z"
            fill="#414141"
          />
          <path
            d="M0 22.7812V41.3438C0 43.67 1.89253 45.5625 4.21875 45.5625H22.7812V22.7812H0Z"
            fill="#575766"
          />
          <path
            d="M14.6719 9.98438H12.7969V8.10938C12.7969 7.33275 12.1673 6.70312 11.3906 6.70312C10.614 6.70312 9.98438 7.33275 9.98438 8.10938V9.98438H8.10938C7.33275 9.98438 6.70312 10.614 6.70312 11.3906C6.70312 12.1673 7.33275 12.7969 8.10938 12.7969H9.98438V14.6719C9.98438 15.4485 10.614 16.0781 11.3906 16.0781C12.1673 16.0781 12.7969 15.4485 12.7969 14.6719V12.7969H14.6719C15.4485 12.7969 16.0781 12.1673 16.0781 11.3906C16.0781 10.614 15.4485 9.98438 14.6719 9.98438Z"
            fill="#FCFDFF"
          />
          <path
            d="M37.4531 12.7969H30.8906C30.114 12.7969 29.4844 12.1673 29.4844 11.3906C29.4844 10.614 30.114 9.98438 30.8906 9.98438H37.4531C38.2297 9.98438 38.8594 10.614 38.8594 11.3906C38.8594 12.1673 38.2297 12.7969 37.4531 12.7969Z"
            fill="#FCFDFF"
          />
          <path
            d="M13.3793 34.1719L14.7287 32.8224C15.2779 32.2733 15.2779 31.3829 14.7287 30.8337C14.1796 30.2845 13.2892 30.2845 12.74 30.8337L11.3906 32.1832L10.0412 30.8337C9.49206 30.2845 8.60163 30.2845 8.05244 30.8337C7.50325 31.3829 7.50325 32.2733 8.05244 32.8224L9.40187 34.1719L8.05244 35.5213C7.50325 36.0705 7.50325 36.9609 8.05244 37.51C8.32703 37.7846 8.68694 37.922 9.04675 37.922C9.40656 37.922 9.76656 37.7847 10.0411 37.51L11.3905 36.1606L12.7399 37.51C13.0145 37.7846 13.3744 37.922 13.7342 37.922C14.0941 37.922 14.4541 37.7847 14.7286 37.51C15.2777 36.9609 15.2777 36.0705 14.7286 35.5213L13.3793 34.1719Z"
            fill="#FCFDFF"
          />
          <path
            d="M33.4688 48C25.4561 48 18.9375 41.4813 18.9375 33.4688C18.9375 25.4562 25.4561 18.9375 33.4688 18.9375C41.4814 18.9375 48 25.4562 48 33.4688C48 41.4813 41.4814 48 33.4688 48Z"
            fill="#F1972C"
          />
          <path
            d="M36.75 37.6875H30.1875C29.4109 37.6875 28.7812 37.0579 28.7812 36.2812C28.7812 35.5046 29.4109 34.875 30.1875 34.875H36.75C37.5266 34.875 38.1562 35.5046 38.1562 36.2812C38.1562 37.0579 37.5266 37.6875 36.75 37.6875Z"
            fill="#FCFDFF"
          />
          <path
            d="M36.75 32.0625H30.1875C29.4109 32.0625 28.7812 31.4329 28.7812 30.6562C28.7812 29.8796 29.4109 29.25 30.1875 29.25H36.75C37.5266 29.25 38.1562 29.8796 38.1562 30.6562C38.1562 31.4329 37.5266 32.0625 36.75 32.0625Z"
            fill="#FCFDFF"
          />
        </svg>
      )}
    </>
  )
}

export default Logo
