const CategoriesGrid: React.FC = () => {
  return (
    <div className="categories__grid">
      <div className="grid__item">
        <div className="logo__container">
          <svg
            width="60"
            height="53"
            viewBox="0 0 60 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.7792 10.8961H46.7792V7.89606C46.7749 4.03193 43.6434 0.900432 39.7792 0.896057H21.7792C17.9151 0.900432 14.7836 4.03193 14.7792 7.89606V10.8961H3.77924C2.12236 10.8961 0.779236 12.2392 0.779236 13.8961V33.8961C0.784486 35.1628 1.58486 36.2898 2.77924 36.7121V49.8961C2.77924 51.5529 4.12236 52.8961 5.77924 52.8961H55.7792C57.4361 52.8961 58.7792 51.5529 58.7792 49.8961V36.7121C59.9736 36.2898 60.774 35.1628 60.7792 33.8961V13.8961C60.7792 12.2392 59.4361 10.8961 57.7792 10.8961ZM16.7792 7.89606C16.7825 5.13606 19.0192 2.89931 21.7792 2.89606H39.7792C42.5392 2.89931 44.776 5.13606 44.7792 7.89606V10.8961H42.7392L42.7792 7.89606C42.776 6.24056 41.4347 4.89931 39.7792 4.89606H21.7422C20.0867 4.89931 18.7455 6.24056 18.7422 7.89606V7.90606L18.7692 10.8961H16.7792V7.89606ZM40.7792 7.88206L40.7392 10.8961H20.7692L20.7382 7.89606C20.7382 7.34381 21.186 6.89606 21.7382 6.89606H39.7792C40.3261 6.89606 40.7716 7.33518 40.7792 7.88206ZM56.7792 49.8961C56.7792 50.4483 56.3315 50.8961 55.7792 50.8961H5.77924C5.22699 50.8961 4.77924 50.4483 4.77924 49.8961V36.8961H11.7792V39.8961C11.7792 40.4483 12.227 40.8961 12.7792 40.8961H16.7792C17.3315 40.8961 17.7792 40.4483 17.7792 39.8961V36.8961H43.7792V39.8961C43.7792 40.4483 44.227 40.8961 44.7792 40.8961H48.7792C49.3315 40.8961 49.7792 40.4483 49.7792 39.8961V36.8961H56.7792V49.8961ZM13.7792 38.8961V33.8961C13.7787 33.6264 13.8899 33.3687 14.0862 33.1841C14.2681 32.9972 14.5185 32.8931 14.7792 32.8961C15.3315 32.8961 15.7792 33.3438 15.7792 33.8961V35.8961V38.8961H13.7792ZM45.7792 38.8961V33.8961C45.7792 33.3438 46.227 32.8961 46.7792 32.8961C47.049 32.8952 47.3071 33.0059 47.4922 33.2021C47.6777 33.3852 47.7812 33.6354 47.7792 33.8961V35.8961V38.8961H45.7792ZM58.7792 33.8961C58.7792 34.4483 58.3315 34.8961 57.7792 34.8961H49.7792V33.8961C49.7721 32.2422 48.4331 30.9032 46.7792 30.8961C45.1224 30.8961 43.7792 32.2392 43.7792 33.8961V34.8961H17.7792V33.8961C17.7792 32.2392 16.4361 30.8961 14.7792 30.8961C13.1262 30.9053 11.7885 32.2431 11.7792 33.8961V34.8961H3.77924C3.22699 34.8961 2.77924 34.4483 2.77924 33.8961V13.8961C2.77924 13.3438 3.22699 12.8961 3.77924 12.8961H57.7792C58.3315 12.8961 58.7792 13.3438 58.7792 13.8961V33.8961Z"
              fill="#008379"
            />
          </svg>
        </div>
        <div className="title">Business</div>
      </div>
      <div className="grid__item">
        <div className="logo__container">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M58.7257 22.4861H3.70522C3.01496 22.4861 2.45471 23.0463 2.45471 23.7366V53.7477C2.45471 57.194 5.25829 60 8.70699 60H53.7237C57.1725 60 59.976 57.194 59.976 53.7477V23.7366C59.9761 23.0462 59.416 22.4861 58.7257 22.4861ZM57.4752 53.7476C57.4752 55.8159 55.7921 57.499 53.7238 57.499H8.70711C6.6388 57.499 4.95572 55.8159 4.95572 53.7476V24.987H57.4752V53.7476Z"
                fill="#008379"
              />
              <path
                d="M59.9355 10.9142L57.8071 2.83874C57.317 0.875473 55.3113 -0.357445 53.323 0.0927219L2.93928 12.0471C1.94891 12.2722 1.11106 12.8749 0.578361 13.7403C0.0456637 14.6056 -0.111895 15.626 0.138159 16.6163L2.49403 25.9297C2.63412 26.4949 3.14431 26.8726 3.70444 26.8726C3.80444 26.8726 3.90702 26.8627 4.01452 26.8351C4.68227 26.6676 5.08742 25.9873 4.91732 25.3171L4.7798 24.7744L59.0024 12.4549C59.3325 12.3774 59.6201 12.1722 59.7953 11.8822C59.973 11.592 60.0205 11.2419 59.9355 10.9142ZM4.16727 22.3484L2.56168 16.0086C2.47915 15.6785 2.53413 15.3384 2.70927 15.0482C2.88687 14.7607 3.16694 14.5606 3.50703 14.4805L53.8907 2.52867C53.9807 2.50616 54.0732 2.49619 54.1632 2.49619C54.7235 2.49619 55.2412 2.8813 55.3837 3.45901L57.1869 10.2991L4.16727 22.3484Z"
                fill="#008379"
              />
              <path
                d="M14.2692 22.6161C13.6489 22.3135 12.9036 22.5585 12.5885 23.1763L7.58663 33.18C7.27902 33.7977 7.52907 34.548 8.14688 34.8582C8.32941 34.9482 8.51956 34.9908 8.70713 34.9908C9.1648 34.9908 9.60746 34.7381 9.82751 34.2981L14.8294 24.2944C15.137 23.6765 14.8868 22.9262 14.2692 22.6161Z"
                fill="#008379"
              />
              <path
                d="M26.7713 22.6161C26.1536 22.3135 25.4034 22.5585 25.0932 23.1763L20.0913 33.18C19.7837 33.7977 20.0337 34.548 20.6515 34.8582C20.834 34.9482 21.0242 34.9908 21.2118 34.9908C21.6694 34.9908 22.1121 34.7381 22.3297 34.2981L27.3316 24.2944C27.6391 23.6765 27.389 22.9262 26.7713 22.6161Z"
                fill="#008379"
              />
              <path
                d="M39.2759 22.6161C38.6607 22.3135 37.9104 22.5585 37.5977 23.1763L32.5959 33.18C32.2882 33.7977 32.5383 34.548 33.1561 34.8582C33.3386 34.9482 33.5288 34.9908 33.7163 34.9908C34.174 34.9908 34.6167 34.7381 34.8343 34.2981L39.8361 24.2944C40.1438 23.6765 39.8936 22.9262 39.2759 22.6161Z"
                fill="#008379"
              />
              <path
                d="M51.7806 22.6161C51.1603 22.3135 50.4151 22.5585 50.1024 23.1763L45.1006 33.18C44.7929 33.7977 45.043 34.548 45.6608 34.8582C45.8433 34.9482 46.0335 34.9908 46.221 34.9908C46.6787 34.9908 47.1214 34.7381 47.339 34.2981L52.3409 24.2944C52.6484 23.6765 52.3983 22.9262 51.7806 22.6161Z"
                fill="#008379"
              />
              <path
                d="M58.7257 32.4897H3.70522C3.01496 32.4897 2.45471 33.05 2.45471 33.7402C2.45471 34.4305 3.01496 34.9907 3.70522 34.9907H58.7257C59.4184 34.9907 59.9762 34.4305 59.9762 33.7402C59.9762 33.05 59.416 32.4897 58.7257 32.4897Z"
                fill="#008379"
              />
              <path
                d="M15.7972 20.3027L7.184 11.6896C6.69632 11.2019 5.90349 11.2019 5.41581 11.6896C4.92813 12.1772 4.92813 12.9701 5.41581 13.4577L14.029 22.0734C14.2741 22.316 14.5942 22.4386 14.9143 22.4386C15.2345 22.4386 15.5545 22.3161 15.7972 22.0709C16.2849 21.5831 16.2849 20.7904 15.7972 20.3027Z"
                fill="#008379"
              />
              <path
                d="M28.0317 17.5242L19.4111 8.91099C18.9234 8.42331 18.1306 8.42331 17.6429 8.91099C17.1552 9.39867 17.1552 10.1915 17.6429 10.6792L26.2612 19.2924C26.5063 19.5349 26.8263 19.6575 27.1465 19.6575C27.4666 19.6575 27.7867 19.535 28.0318 19.2924C28.5195 18.8047 28.5195 18.0119 28.0317 17.5242Z"
                fill="#008379"
              />
              <path
                d="M40.2563 14.7457L31.6506 6.13004C31.1629 5.64236 30.3701 5.64236 29.8824 6.13004C29.3947 6.61772 29.3947 7.41056 29.8824 7.89824L38.4881 16.5139C38.7332 16.7564 39.0533 16.8791 39.3734 16.8791C39.6936 16.8791 40.0136 16.759 40.2563 16.5139C40.744 16.0262 40.744 15.2334 40.2563 14.7457Z"
                fill="#008379"
              />
              <path
                d="M52.4759 11.9696L43.8676 3.35398C43.3799 2.8663 42.5871 2.8663 42.0994 3.35398C41.6117 3.84166 41.6117 4.6345 42.0994 5.12218L50.7076 13.7378C50.9527 13.9804 51.2727 14.103 51.5929 14.103C51.913 14.103 52.2331 13.9805 52.4757 13.7378C52.9635 13.2502 52.9635 12.4573 52.4759 11.9696Z"
                fill="#008379"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="title">Entertainement</div>
      </div>
      <div className="grid__item">
        <div className="logo__container">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M45.4293 54.377C45.1047 53.8175 44.3879 53.627 43.8278 53.9516L43.7826 53.9776C43.223 54.3023 43.0325 55.0194 43.3571 55.5792C43.5745 55.9539 43.9677 56.1632 44.3717 56.1632C44.5712 56.1632 44.7737 56.1119 44.9587 56.0046L45.0038 55.9786C45.5635 55.6539 45.754 54.9368 45.4293 54.377Z"
                fill="#008379"
              />
              <path
                d="M55.9801 15.0102C51.9744 8.0721 45.5067 3.10932 37.7683 1.03581C30.0302 -1.03771 21.9476 0.0264698 15.0095 4.03206C8.0715 8.03764 3.1086 14.5055 1.0352 22.2437C-1.03819 29.9819 0.0258682 38.0647 4.03146 45.0027C7.62454 51.2262 13.3353 55.956 20.1118 58.3206C23.324 59.4414 26.6774 60.0007 30.0255 60.0007C33.666 60.0007 37.2998 59.3391 40.7347 58.0189C41.3388 57.7868 41.6402 57.1089 41.4079 56.5048C41.1757 55.9007 40.4976 55.5989 39.8938 55.8315C30.7508 59.3456 20.8529 57.7489 13.458 52.1982L14.5079 46.718L15.0138 46.5537C16.9255 45.9326 17.9755 43.8719 17.3546 41.9601L16.9834 40.8177C16.8975 40.5533 16.8979 40.2738 16.9845 40.0097C17.3102 39.0169 17.1938 37.9307 16.6652 37.0292C16.1366 36.128 15.2454 35.496 14.2199 35.2955L11.5749 34.7787L6.47165 30.8986C6.16591 30.6661 5.76571 30.5982 5.40032 30.7168L2.41251 31.6874C2.34911 30.6187 2.34817 29.5505 2.40841 28.4878C2.5263 28.5976 2.60306 28.6723 2.65028 28.7212C2.70876 28.8186 2.78118 28.9079 2.86603 28.9853C3.11001 29.2074 3.33103 29.3082 3.79509 29.3082C4.22153 29.3081 4.85282 29.2232 5.89521 29.0692C6.8838 28.923 7.86724 28.7584 7.87696 28.7567C8.27106 28.6908 8.60423 28.4283 8.76103 28.0609C8.91782 27.6934 8.87646 27.2714 8.65134 26.9412L7.2145 24.8337L9.27255 23.362C9.40966 23.2639 9.52403 23.1375 9.60782 22.9912L12.798 17.4219L14.0839 16.044C15.3979 14.6357 15.7729 12.5751 15.0391 10.7944C14.6062 9.74401 13.8501 8.86956 12.9044 8.28022C13.9286 7.47502 15.0207 6.73159 16.1813 6.06163C20.4397 3.60303 25.0869 2.41159 29.6852 2.366L27.5927 4.99088L19.8331 7.71116C19.518 7.82155 19.2649 8.06131 19.1376 8.36999L16.9706 13.6233C16.8167 13.9965 16.8656 14.4224 17.1001 14.751L20.2651 19.1844C19.8118 19.598 19.3706 20.2003 18.8436 20.9482C18.6125 21.2762 18.3943 21.5859 18.2435 21.7596C18.1124 21.9108 17.9811 22.0584 17.851 22.2047C17.1703 22.9705 16.4665 23.7626 15.9664 24.8205C14.867 27.1478 15.089 29.8527 16.5459 31.8798C17.9546 33.8398 20.277 34.8361 22.7558 34.5445C23.1596 34.4972 23.5361 34.404 23.9005 34.3138C24.9051 34.0652 25.2234 34.0404 25.5457 34.342C25.7025 34.4889 25.7169 34.5166 25.7137 35.0146C25.7115 35.3314 25.709 35.7257 25.8183 36.1758C25.9932 36.8959 26.4454 37.3936 26.8087 37.7934C26.9893 37.9921 27.1761 38.1976 27.2336 38.3355C27.5992 39.2114 27.44 39.6964 27.0913 40.7593C27.0614 40.8503 27.0309 40.9431 27.0003 41.0382C26.4705 42.6783 27.209 44.3051 27.8606 45.7401C28.0722 46.2062 28.272 46.6461 28.4029 47.035C29.4566 50.1614 30.2464 50.8774 30.8803 51.1657C31.2123 51.3166 31.5559 51.3828 31.903 51.3827C33.5922 51.3826 35.355 49.8142 36.1647 48.8198C36.6733 48.1955 36.7986 47.5703 36.89 47.1136C36.9356 46.8865 36.9715 46.7072 37.0399 46.59C37.1447 46.4107 37.2681 46.2717 37.4243 46.0957C37.7385 45.7419 38.1295 45.3017 38.3828 44.5038C38.5752 43.8977 38.715 43.7491 39.178 43.256C39.2586 43.1703 39.3445 43.0787 39.4367 42.9784C40.9976 41.28 40.5956 39.9826 40.1699 38.6089C39.8116 37.4531 40.4382 36.7139 41.9532 35.3031C42.6099 34.6915 43.2889 34.0591 43.8138 33.2993C44.0435 32.9667 44.7423 31.955 44.3099 30.9523C43.886 29.969 42.8087 29.8038 41.9431 29.6712C41.6013 29.6187 41.0847 29.5394 40.9203 29.432C40.1953 28.958 39.7517 27.9687 39.3227 27.0118C39.2373 26.8214 39.153 26.6334 39.0676 26.451C38.9153 26.1254 38.763 25.7316 38.6019 25.3146C38.1756 24.2112 37.6924 22.9604 36.8699 22.0885C36.1305 21.3051 34.7368 20.9278 33.5072 20.5948C33.0936 20.4828 32.7033 20.3771 32.4458 20.2821C32.2301 20.2024 31.9959 20.188 31.7726 20.2405C31.1741 20.3808 30.8007 20.5353 30.5235 20.7575C30.4502 20.8162 30.2333 21.009 30.1063 21.3189C29.6772 21.113 29.0873 20.7198 28.7243 20.4778C28.7168 20.4728 28.7092 20.4677 28.7017 20.4627C28.824 19.9731 28.7133 19.5801 28.5972 19.3348C27.9426 17.9501 25.7696 18.0585 25.341 18.0949C25.0974 18.1153 24.7893 18.1262 24.4635 18.1377C23.9516 18.1558 23.3858 18.1762 22.826 18.239L22.8548 18.1587C23.2797 16.9747 24.4104 16.1792 25.6683 16.1792H26.3345C26.9815 16.1792 27.5062 15.6545 27.5062 15.0075C27.5062 14.3605 26.9815 13.8357 26.3345 13.8357H25.6683C23.8008 13.8357 22.0906 14.8186 21.1322 16.3656L19.3843 13.9172L21.1039 9.74893L28.6863 7.09065C28.8942 7.01776 29.0775 6.88768 29.2149 6.7153L32.5856 2.48729C41.1982 3.30655 49.3052 8.13538 53.9508 16.1817C55.1881 18.3249 56.1035 20.5813 56.7121 22.8891L56.2153 23.332C55.5669 23.9106 55.187 24.7404 55.1724 25.6089C55.1723 25.6183 55.1721 25.6277 55.1717 25.6371L54.3624 23.4115C54.2419 23.0794 54.0642 22.7748 53.8347 22.5063L52.3911 20.8161C51.8314 20.1609 51.0165 19.7853 50.1551 19.7853H48.388C47.7607 19.7853 47.1874 20.1289 46.8915 20.6817C46.5956 21.2346 46.6279 21.9023 46.9759 22.424L47.1547 22.6925C46.0128 23.6744 44.6921 24.4602 43.2859 24.9901L40.8636 20.3503V19.3152C40.8636 18.995 40.7326 18.6886 40.5009 18.4677L38.3197 16.3854C38.1994 16.2705 38.0559 16.1826 37.899 16.1274L35.9355 15.4374C35.3246 15.2225 34.656 15.544 34.4415 16.1544C34.2269 16.7651 34.5479 17.4339 35.1585 17.6484L36.8839 18.2549L38.5201 19.8166V20.6379C38.5201 20.8267 38.5658 21.0128 38.6532 21.1802L41.6857 26.9889C41.9584 27.5115 42.5774 27.7503 43.1298 27.546L44.0128 27.2204C46.0642 26.4639 47.9655 25.2469 49.5115 23.7012C49.9064 23.3061 49.9678 22.6875 49.6578 22.2226L49.5955 22.129H50.1551C50.33 22.129 50.4956 22.2053 50.6093 22.3384L52.0529 24.0286C52.0994 24.0831 52.1354 24.1447 52.16 24.2123L53.7532 28.5932C53.8901 28.9696 54.2097 29.2499 54.6004 29.3366C54.6848 29.3552 54.7698 29.3644 54.8543 29.3644C55.1617 29.3644 55.4608 29.2433 55.6828 29.0211L56.4411 28.2628C56.9213 27.7824 57.2519 27.1747 57.4099 26.501C58.5827 35.9 54.8973 45.6228 47.1074 51.737C46.5982 52.1365 46.5094 52.873 46.9091 53.3822C47.3086 53.8914 48.045 53.9802 48.5543 53.5805C54.1783 49.1664 58.042 42.8529 59.4336 35.803C60.8382 28.6851 59.6119 21.3006 55.9801 15.0102ZM5.54118 33.1352L10.3732 36.8092C10.516 36.9178 10.6817 36.9921 10.8577 37.0264L13.7701 37.5955C14.1418 37.6682 14.4519 37.888 14.6435 38.2147C14.8351 38.5413 14.8754 38.9192 14.7575 39.2791C14.5149 40.0189 14.5138 40.8014 14.7543 41.5417L15.1256 42.684C15.3474 43.3667 14.9722 44.1028 14.2896 44.3246L13.1251 44.703C12.7188 44.835 12.4167 45.1776 12.3364 45.5969L11.3992 50.4894C9.33864 48.6035 7.5295 46.3746 6.06103 43.831C4.26946 40.7283 3.15009 37.4188 2.65673 34.0724L5.54118 33.1352ZM12.3705 14.4451L10.992 15.922C10.9305 15.988 10.8767 16.0609 10.8318 16.1392L7.70153 21.6043L4.91938 23.5937C4.40118 23.9642 4.27392 24.6806 4.63274 25.207L5.67325 26.7333C5.07349 26.8226 4.53524 26.8962 4.17735 26.9352C4.10856 26.8692 4.03661 26.8023 3.9622 26.7332C3.68364 26.4744 3.29657 26.1288 2.71954 25.6239C3.67122 19.7337 6.5095 14.1846 10.9734 9.94885C11.8282 10.218 12.5297 10.8556 12.8723 11.6873C13.2579 12.6227 13.0608 13.7053 12.3705 14.4451ZM21.9248 20.8486C22.4475 20.5544 23.6606 20.5114 24.5463 20.48C24.9013 20.4675 25.2367 20.4555 25.5362 20.4305C25.6943 20.4172 25.8698 20.4197 26.0354 20.4326C25.9615 20.6224 25.9374 20.8308 25.9695 21.0375C26.0259 21.4011 26.2501 21.7169 26.5745 21.8905C26.7943 22.0082 27.1003 22.2122 27.4242 22.4282C28.34 23.0387 29.3782 23.7307 30.3534 23.7928C31.2403 23.8503 31.7338 23.3449 31.9452 23.1296C31.962 23.1125 31.978 23.0954 31.9949 23.0798C32.1139 22.9828 32.2255 22.8527 32.3085 22.6958C32.4958 22.7494 32.6927 22.8027 32.8945 22.8574C33.5884 23.0453 34.8799 23.3949 35.1653 23.6973C35.6721 24.2346 36.0671 25.2573 36.4158 26.1595C36.5919 26.6155 36.7583 27.0458 36.945 27.4448C37.0251 27.616 37.104 27.7924 37.1842 27.971C37.7249 29.1771 38.3378 30.5442 39.6379 31.3941C40.2275 31.7795 40.9502 31.8902 41.588 31.9881C41.6651 31.9999 41.7534 32.0135 41.8432 32.0283C41.4647 32.5563 40.9257 33.0581 40.3563 33.5884C38.9056 34.9393 37.1003 36.6207 37.9317 39.303C38.3242 40.5696 38.3424 40.7065 37.7114 41.393C37.6254 41.4866 37.5452 41.5719 37.4701 41.6518C36.9296 42.2272 36.5027 42.6817 36.1493 43.7949C36.0466 44.1183 35.9136 44.268 35.6721 44.5399C35.479 44.7574 35.2384 45.0283 35.0165 45.408C34.7508 45.863 34.6629 46.301 34.5924 46.6529C34.5229 46.9992 34.4836 47.173 34.3476 47.3399C34.0381 47.7198 33.4609 48.2715 32.8683 48.648C32.3175 48.9977 31.9959 49.0455 31.8863 49.039C31.7613 48.9049 31.3084 48.3179 30.624 46.2867C30.4552 45.7856 30.2211 45.27 29.9947 44.7714C29.4956 43.6721 28.9796 42.5354 29.2306 41.7586C29.2603 41.6669 29.2896 41.5774 29.3184 41.4899C29.7194 40.2676 30.0979 39.1134 29.3967 37.433C29.1832 36.9212 28.8432 36.5473 28.5436 36.2173C28.3496 36.0039 28.1299 35.762 28.096 35.6228C28.0548 35.453 28.0561 35.2569 28.0576 35.0299C28.0616 34.4176 28.0677 33.4924 27.1479 32.6311C25.8511 31.4173 24.3389 31.7912 23.3381 32.0387C23.0307 32.1146 22.7403 32.1866 22.483 32.2168C20.8367 32.4097 19.367 31.7886 18.4494 30.5117C17.4895 29.1762 17.3502 27.3789 18.0859 25.8214C18.442 25.0678 18.98 24.4623 19.603 23.7615C19.739 23.6083 19.8764 23.4539 20.0137 23.2957C20.2422 23.0323 20.4937 22.6755 20.7596 22.2978C21.0771 21.8473 21.6682 21.0082 21.9248 20.8486Z"
                fill="#008379"
              />
              <path
                d="M48.0494 40.3451L47.4857 38.22C47.3625 37.7559 46.9687 37.414 46.4921 37.357C46.015 37.3012 45.5522 37.5398 45.3231 37.9618C45.1946 38.1985 45.079 38.4493 44.9672 38.6918C44.7791 39.0997 44.5846 39.5216 44.3822 39.7544C44.2685 39.8852 43.9765 40.0262 43.6943 40.1624C43.0197 40.4879 42.0956 40.9338 41.7427 42.059C41.5235 42.757 41.6053 43.3092 41.6651 43.7123C41.7168 44.0619 41.7287 44.1831 41.6351 44.4029L41.6234 44.4302C41.2504 45.3055 40.5564 46.935 41.5295 48.3203C42.2238 49.3088 42.9539 49.563 43.5212 49.563C43.632 49.5634 43.7367 49.5536 43.8336 49.5378C45.0289 49.3425 45.9275 48.0991 46.6618 45.6246L48.0402 40.9792C48.1015 40.7726 48.1048 40.5532 48.0494 40.3451ZM44.4152 44.9579C44.0409 46.2196 43.7098 46.8085 43.5186 47.0696C43.4966 47.0415 43.4727 47.0096 43.4472 46.9732C43.2232 46.6542 43.5579 45.8686 43.7794 45.3486L43.7912 45.3212C44.1484 44.4828 44.0529 43.839 43.9834 43.3689C43.9388 43.0678 43.9228 42.9384 43.9787 42.7606C44.0247 42.6145 44.2992 42.4727 44.7129 42.273C44.8963 42.1844 45.0982 42.0871 45.302 41.9692L44.4152 44.9579Z"
                fill="#008379"
              />
              <path
                d="M31.6441 13.9289L31.565 13.9013C30.9549 13.6875 30.2857 14.0085 30.0715 14.6192C29.8573 15.2299 30.1787 15.8985 30.7894 16.1127L30.8684 16.1404C30.9967 16.1854 31.1275 16.2067 31.2563 16.2067C31.74 16.2067 32.1928 15.9047 32.362 15.4225C32.5763 14.8117 32.2548 14.143 31.6441 13.9289Z"
                fill="#008379"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="60" height="60" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="title">General</div>
      </div>
      <div className="grid__item">
        <div className="logo__container">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.1719 27.1875C24.525 27.1875 24 27.7125 24 28.3594C24 29.0063 24.525 29.5312 25.1719 29.5312C25.8188 29.5312 26.3438 29.0063 26.3438 28.3594C26.3438 27.7125 25.8188 27.1875 25.1719 27.1875Z"
              fill="#008379"
            />
            <path
              d="M25.1719 20.1562C24.525 20.1562 24 20.6812 24 21.3281C24 21.975 24.525 22.5 25.1719 22.5C25.8188 22.5 26.3438 21.975 26.3438 21.3281C26.3438 20.6812 25.8188 20.1562 25.1719 20.1562Z"
              fill="#008379"
            />
            <path
              d="M25.1719 50.625C24.525 50.625 24 51.15 24 51.7969C24 52.4438 24.525 52.9688 25.1719 52.9688C25.8188 52.9688 26.3438 52.4438 26.3438 51.7969C26.3438 51.15 25.8188 50.625 25.1719 50.625Z"
              fill="#008379"
            />
            <path
              d="M48.5694 47.7748L33.5206 21.0212V6.83039C34.8848 6.34676 35.8644 5.04352 35.8644 3.51562C35.8644 1.57711 34.2873 0 32.3487 0H18.2862C16.3477 0 14.7706 1.57711 14.7706 3.51562C14.7706 5.04352 15.7502 6.34676 17.1144 6.83039V21.0212L2.06562 47.7748C0.620933 50.343 0.646597 53.395 2.13406 55.9384C3.6214 58.4816 6.26843 60 9.21476 60H41.4202C44.3666 60 47.0135 58.4816 48.5009 55.9384C49.9884 53.395 50.0141 50.343 48.5694 47.7748ZM19.3077 21.9026C19.4063 21.7273 19.4581 21.5293 19.4581 21.3281V7.03125H20.63C21.2771 7.03125 21.8019 6.50648 21.8019 5.85938C21.8019 5.21227 21.2771 4.6875 20.63 4.6875H18.2862C17.6401 4.6875 17.1144 4.1618 17.1144 3.51562C17.1144 2.86945 17.6401 2.34375 18.2862 2.34375H32.3487C32.9949 2.34375 33.5206 2.86945 33.5206 3.51562C33.5206 4.1618 32.9949 4.6875 32.3487 4.6875H30.005C29.3579 4.6875 28.8331 5.21227 28.8331 5.85938C28.8331 6.50648 29.3579 7.03125 30.005 7.03125H31.1769V21.3281C31.1769 21.5295 31.2287 21.7271 31.3273 21.9026L38.2345 34.1823C34.0163 33.8407 29.8128 34.6938 25.9508 36.6936C20.986 39.2629 15.4591 39.7152 10.2477 38.0093L19.3077 21.9026ZM46.4777 54.7552C45.4154 56.5717 43.5247 57.6562 41.4202 57.6562H9.21476C7.11031 57.6562 5.2196 56.5717 4.1573 54.7552C3.09476 52.9384 3.07636 50.7584 4.10843 48.9237L9.07812 40.0887C11.4894 40.9307 13.9812 41.3557 16.5121 41.3557C16.8868 41.3557 17.2624 41.3464 17.6387 41.3278C20.9088 41.1659 24.0678 40.307 27.0282 38.775C30.9882 36.7247 35.3437 36.0169 39.659 36.7147L46.5267 48.9237C47.5586 50.7584 47.5403 52.9384 46.4777 54.7552Z"
              fill="#008379"
            />
            <path
              d="M24.5156 27.1875C22.5771 27.1875 21 28.7646 21 30.7031C21 32.6416 22.5771 34.2188 24.5156 34.2188C26.4541 34.2188 28.0312 32.6416 28.0312 30.7031C28.0312 28.7646 26.4541 27.1875 24.5156 27.1875ZM24.5156 31.875C23.8695 31.875 23.3438 31.3493 23.3438 30.7031C23.3438 30.057 23.8695 29.5312 24.5156 29.5312C25.1618 29.5312 25.6875 30.057 25.6875 30.7031C25.6875 31.3493 25.1618 31.875 24.5156 31.875Z"
              fill="#008379"
            />
            <path
              d="M36.6094 50.625H13.1719C12.5248 50.625 12 51.1498 12 51.7969C12 52.444 12.5248 52.9688 13.1719 52.9688H36.6094C37.2565 52.9688 37.7812 52.444 37.7812 51.7969C37.7812 51.1498 37.2565 50.625 36.6094 50.625Z"
              fill="#008379"
            />
          </svg>
        </div>
        <div className="title">Science</div>
      </div>
      <div className="grid__item">
        <div className="logo__container">
          <svg
            width="60"
            height="50"
            viewBox="0 0 60 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M53.9735 23.0005H50.8594V19.8233C50.8594 19.163 50.3347 18.6277 49.6875 18.6277C49.0403 18.6277 48.5156 19.163 48.5156 19.8233V23.0005H45.4015C44.7543 23.0005 44.2296 23.5358 44.2296 24.1961C44.2296 24.8564 44.7543 25.3917 45.4015 25.3917H48.5156V28.5689C48.5156 29.2292 49.0403 29.7645 49.6875 29.7645C50.3347 29.7645 50.8594 29.2292 50.8594 28.5689V25.3917H53.9735C54.6207 25.3917 55.1454 24.8564 55.1454 24.1961C55.1454 23.5358 54.6207 23.0005 53.9735 23.0005Z"
              fill="#008379"
            />
            <path
              d="M53.5189 14.4282C52.4244 6.17502 45.6617 0 37.6347 0C33.5827 0 29.7923 1.54101 26.836 4.3656C23.8796 1.54101 20.0891 0 16.0373 0C7.19427 0 0 7.51469 0 16.7515C0 18.5765 0.521837 20.622 1.56 22.88H1.17188C0.524649 22.88 0 23.4153 0 24.0756C0 24.736 0.524649 25.2712 1.17188 25.2712H2.80805C4.99677 29.0517 8.45802 33.3507 13.1776 38.1386C19.5737 44.6272 26.0594 49.7036 26.1242 49.7542C26.3342 49.9181 26.5851 50 26.836 50C27.0869 50 27.3377 49.9181 27.5478 49.7542C27.5972 49.7156 32.5576 45.8349 38.0546 40.5472C38.5256 40.0942 38.5474 39.3375 38.1034 38.8572C37.6595 38.3768 36.9178 38.3544 36.4468 38.8074C32.2545 42.84 28.3842 46.0374 26.8361 47.2866C24.9965 45.8017 19.8752 41.5629 14.8135 36.426C10.7611 32.3133 7.65892 28.5653 5.56161 25.2712H16.053C16.5757 25.2712 17.0352 24.9179 17.1794 24.4054L19.2269 17.1239L24.8969 35.6579C25.0497 36.1571 25.5029 36.4973 26.0156 36.4973C26.5283 36.4973 26.9814 36.1571 27.1341 35.6579L30.2742 25.3909H35.5059C36.1531 25.3909 36.6778 24.8556 36.6778 24.1953C36.6778 23.535 36.1531 22.9997 35.5059 22.9997H29.4122C28.8995 22.9997 28.4463 23.3397 28.2936 23.8391L26.0152 31.2883L20.2981 12.6004C20.1439 12.0962 19.6847 11.7538 19.1658 11.7611C18.6482 11.7672 18.1957 12.1192 18.0529 12.6269L15.1697 22.8801H4.1747C2.96333 20.5468 2.34375 18.4903 2.34375 16.7515C2.34375 8.83319 8.48662 2.3912 16.0373 2.3912C19.8323 2.3912 23.3615 3.98277 25.9747 6.87253C26.1966 7.11787 26.5088 7.2574 26.836 7.2574C27.1632 7.2574 27.4755 7.11787 27.6973 6.87253C30.3105 3.98277 33.8397 2.3912 37.6347 2.3912C44.1629 2.3912 49.713 7.19439 51.0322 13.7643C50.5919 13.7056 50.1432 13.6749 49.6875 13.6749C44.0012 13.6749 39.375 18.3947 39.375 24.1961C39.375 29.9975 44.0012 34.7174 49.6875 34.7174C55.3738 34.7174 60 29.9975 60 24.1961C60.0001 19.7753 57.3136 15.9831 53.5189 14.4282ZM49.6876 32.3262C45.2936 32.3262 41.7188 28.679 41.7188 24.1961C41.7188 19.7132 45.2936 16.0661 49.6876 16.0661C54.0816 16.0661 57.6564 19.7132 57.6564 24.1961C57.6564 28.679 54.0816 32.3262 49.6876 32.3262Z"
              fill="#008379"
            />
          </svg>
        </div>
        <div className="title">Health</div>
      </div>
    </div>
  );
};

export default CategoriesGrid;
