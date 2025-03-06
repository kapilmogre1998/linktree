import React from 'react'

const Icons = ({ color, index, className }) => {

    const renderIcon = () => {
        switch (index) {
            case '11':
                return <svg width="1000" className={className} height="10" viewBox="0 0 182 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_168_580)">
                        <path d="M640 0.800427V5.00043H0V0.800427H1.4C1.6 0.800427 1.7 0.800427 1.9 0.900427H2.2C2.3 0.800427 2.4 0.900427 2.5 1.00043H3.4C3.6 1.00043 3.8 1.10043 4 1.20043C4.1 1.20043 4.2 1.30043 4.3 1.30043L4.5 1.40043C4.6 1.50043 4.8 1.60043 4.9 1.80043C5 2.00043 5.2 1.90043 5.4 1.90043H5.6C5.7 1.90043 5.7 1.90043 5.8 2.00043C5.9 2.00043 6 2.10043 6.1 2.20043C6.2 2.30043 6.3 2.30043 6.4 2.30043H7.1C7.2 2.30043 7.2 2.30043 7.2 2.20043C7.3 2.10043 7.4 2.10043 7.5 2.10043H9.3C9.4 2.10043 9.5 2.20043 9.7 2.30043H10C10.2 2.30043 10.5 2.20043 10.7 2.20043C10.9 2.20043 11.1 2.10043 11.3 2.00043C11.8 1.80043 12.3 1.60043 12.8 1.50043C13.3 1.30043 13.9 1.20043 14.4 1.10043C14.9 1.00043 15.4 1.00043 15.8 1.10043H16.3C16.4 1.10043 16.6 1.20043 16.7 1.20043C16.8 1.20043 16.9 1.30043 17 1.30043L17.2 1.50043L17.5 1.80043C17.7 1.90043 18 2.10043 18.2 2.10043H18.5L18.7 1.90043C18.8 1.80043 19 1.70043 19.1 1.70043C19.4 1.70043 19.6 1.70043 19.9 1.80043C20 1.80043 20.1 1.90043 20.3 1.90043C20.3 1.90043 20.4 2.00043 20.5 2.00043C20.6 2.00043 20.8 1.90043 20.9 2.00043H21C21.1 2.10043 21.2 2.10043 21.4 2.20043C21.6 2.20043 21.9 2.20043 22.1 2.10043H23.2C23.3 2.10043 23.4 2.10043 23.5 2.20043C23.6 2.30043 23.9 2.30043 24.2 2.30043C24.4 2.30043 24.6 2.40043 24.8 2.50043C25 2.60043 25.3 2.60043 25.5 2.60043C25.8 2.70043 26.1 2.70043 26.4 2.60043C26.7 2.50043 26.8 2.30043 27.1 2.20043C27.2 2.10043 27.4 2.00043 27.5 2.00043C27.8 2.00043 28.2 2.00043 28.5 2.20043C28.8 2.30043 29.2 2.30043 29.6 2.30043H31.3C31.5 2.30043 31.6 2.20043 31.8 2.10043C32 2.10043 32.4 2.00043 32.7 2.00043H32.9L33.1 1.90043C33.2 1.90043 33.3 2.10043 33.4 2.20043C33.5 2.30043 33.5 2.40043 33.6 2.50043C33.6 2.60043 33.6 2.60043 33.7 2.70043H34.3C34.4 2.70043 34.5 2.90043 34.6 3.00043C34.7 3.00043 34.8 3.10043 35 3.10043C35.1 3.10043 35.3 3.10043 35.4 3.00043C35.6 2.90043 35.9 2.80043 36.1 2.80043C36.3 2.70043 36.6 2.80043 36.8 3.00043C36.9 3.10043 36.9 3.20043 37.1 3.10043C37.2 3.10043 37.3 3.00043 37.4 2.90043L37.9 2.60043C38.1 2.50043 38.3 2.50043 38.6 2.50043L39.3 2.60043C39.4 2.60043 39.6 2.70043 39.7 2.70043H40.3C41.2 2.70043 42.2 2.70043 43.1 2.60043C43.7 2.60043 44.3 2.50043 44.8 2.30043L45 2.60043L45.2 2.80043C45.4 2.90043 45.6 3.00043 45.8 3.00043C46.3 3.20043 46.8 3.30043 47.3 3.40043C47.7 3.50043 48.1 3.50043 48.5 3.60043H48.7C49.1 3.50043 49.5 3.50043 49.9 3.60043C50.2 3.70043 50.6 3.70043 50.9 3.80043H51.9C52.3 3.80043 52.8 3.70043 53.2 3.60043C53.6 3.50043 54.1 3.50043 54.5 3.40043C54.9 3.30043 55.3 3.20043 55.6 3.10043H55.8C55.9 3.10043 56 3.10043 56.1 3.00043C56.3 2.90043 56.4 2.80043 56.5 2.70043L57 2.40043L57.2 2.30043C57.3 2.30043 57.3 2.30043 57.4 2.20043H57.6C57.7 2.20043 57.8 2.30043 57.9 2.30043C58 2.40043 58.1 2.40043 58.2 2.50043H59.1C59.2 2.50043 59.3 2.40043 59.4 2.40043L59.6 2.30043C59.7 2.20043 59.8 2.10043 60 2.10043H60.5L61 2.30043C61.2 2.40043 61.4 2.40043 61.7 2.50043H62.4C62.5 2.50043 62.5 2.50043 62.6 2.60043C62.7 2.70043 62.8 2.70043 62.8 2.70043L63 2.90043C63.2 3.00043 63.3 3.00043 63.4 3.00043H64.1C64.2 3.00043 64.3 3.10043 64.4 3.10043C64.6 3.10043 64.7 3.20043 64.9 3.20043H71.8C73.4 3.20043 73.8 3.50043 74.9 3.60043C76.2 3.70043 76.2 3.20043 77.2 3.20043C77.9 3.20043 78.4 3.70043 79.5 3.60043C81.1 3.60043 82.7 3.20043 84.1 2.50043C84.7 2.50043 84.9 2.90043 85.6 2.90043C86.1 2.90043 87.1 2.60043 87.9 2.50043C88.7 2.30043 89.4 2.30043 90.2 2.50043C91.8 2.60043 93.3 2.50043 94.8 2.10043H96.3C97.1 1.60043 96.6 2.20043 97.8 2.10043C98.4 2.10043 99.6 1.90043 101.7 1.70043H102C103.2 1.70043 104.4 1.40043 105.6 1.00043C109.6 2.40043 115 1.00043 121.8 1.40043C124.2 1.50043 125.6 2.20043 128 2.20043C130.2 2.40043 130.8 1.60043 132.6 1.40043C135 1.20043 134.7 2.10043 137.2 1.80043C137.4 1.80043 138.3 1.40043 138 1.40043C139 1.50043 139.5 2.00043 141.1 2.20043C140.8 2.20043 141.5 1.60043 141.9 1.80043C143 2.50043 145.7 2.10043 148.1 2.60043C148.4 2.70043 148.1 3.00043 148.9 3.00043C149.5 3.00043 149.7 3.30043 150.4 3.40043C151.9 3.50043 154 3.50043 155.8 3.40043C156.4 3.40043 156.6 3.10043 157.3 3.00043C157.3 3.00043 158.2 3.60043 158.1 3.00043C159.8 2.80043 159.2 3.70043 160.4 3.80043C163.4 3.10043 167.7 3.10043 169.6 1.90043C173.7 2.00043 177 1.70043 178.9 0.800427C180 1.00043 178.8 1.10043 178.9 1.60043C179.6 1.80043 180.3 1.90043 180.4 2.40043C183.1 1.90043 184 2.80043 185.8 2.00043C186.8 2.10043 187 2.70043 188.1 2.80043C189.5 2.90043 189.7 2.40043 191.2 2.40043C193.2 2.50043 195 3.10043 197.4 2.80043C200.1 2.70043 200.3 1.50043 202.8 1.30043C207.1 0.800427 209.7 2.20043 213.6 1.70043C214.3 1.60043 214.9 1.40043 215.9 1.30043C216.2 1.30043 216.5 1.10043 216.7 0.900427C217.6 0.800427 217.1 1.20043 217.5 1.30043C218.8 1.00043 220.1 0.900427 221.4 0.900427C223.5 1.00043 225.6 1.40043 227.6 2.00043C229.9 2.10043 230 1.10043 232.2 1.20043C232.7 1.60043 234 1.60043 233.7 2.30043C234.5 1.40043 239.2 2.50043 239.9 1.50043C241.9 1.50043 241 3.00043 243 3.00043C245.4 3.40043 246.5 3.00043 249.9 3.40043C250.7 3.60043 251.4 3.70043 252.2 3.80043C253.5 3.70043 254.8 3.40043 256.1 3.00043C257.6 2.70043 259.5 3.10043 260 2.20043C260.2 2.60043 261.8 2.30043 262.3 2.60043C263.2 3.10043 262.9 2.40043 264.6 2.60043C264.8 2.80043 265.1 2.90043 265.4 3.00043L266.5 3.10043C267 3.10043 267.4 3.20043 267.8 3.20043C268.2 3.20043 268.7 3.30043 269.1 3.40043C269.3 3.40043 269.5 3.50043 269.6 3.60043L269.8 3.70043L270 3.80043H270.2C270.3 3.80043 270.3 3.90043 270.3 3.90043C270.4 3.90043 270.4 4.00043 270.5 4.00043H270.8L270.9 3.90043H271.4C271.5 3.90043 271.6 4.00043 271.7 4.00043H274.4C275 3.90043 278.3 3.40043 279.8 3.20043C280.6 3.10043 281.3 3.10043 282.1 3.20043C283.4 3.50043 284.7 3.50043 286 3.20043C287.7 3.00043 288.5 3.00043 291.4 2.80043C292.6 2.70043 292.7 2.50043 293.7 2.40043C294.6 2.30043 294.2 2.70043 294.5 2.80043C294.6 2.80043 296.8 2.40043 296.8 2.40043C297.6 1.90043 297.6 2.20043 299.9 2.40043C300.7 2.10043 301.6 1.80043 302.5 1.60043C303.2 1.40043 303.8 1.20043 304.4 0.900427C304.7 0.800427 305 0.900427 305.2 1.00043C305.5 1.10043 305.9 1.20043 306.2 1.10043H307.7C308.5 1.00043 309.4 1.10043 310.2 1.20043L311 1.40043C311.5 1.50043 312 1.50043 312.5 1.30043C312.7 1.20043 313 1.20043 313.2 1.20043C313.6 1.20043 313.9 1.30043 314.3 1.30043C314.6 1.30043 314.8 1.30043 315.1 1.20043C315.6 1.10043 316 1.10043 316.5 1.10043H316.9C317.1 1.10043 317.2 1.40043 317.3 1.50043C317.8 1.90043 318.4 2.00043 319.1 1.90043C319.6 1.80043 320.1 1.80043 320.5 1.80043H321.2C321.4 1.80043 321.6 1.70043 321.8 1.50043C322.1 1.30043 322.1 1.20043 322.4 1.20043H322.8C323 1.30043 323.1 1.50043 323.3 1.60043C323.8 1.90043 324.5 1.50043 325 1.30043C325.2 1.20043 325.3 1.20043 325.5 1.20043C325.7 1.20043 325.8 1.40043 326 1.50043C326.3 1.50043 326.7 1.30043 326.9 1.10043C327.3 1.00043 327.7 1.00043 328.1 1.00043C328.2 1.00043 328.3 0.900427 328.5 0.900427C328.7 0.900427 328.9 1.00043 329 1.10043C329.3 1.20043 329.5 1.30043 329.8 1.40043L330.1 1.70043C330.2 1.80043 330.3 2.00043 330.5 2.10043C330.7 2.20043 330.9 2.30043 331.2 2.30043H332.7C333.2 2.30043 333.7 2.40043 334.1 2.50043C335.1 2.80043 336 3.00043 337 3.10043C339.4 3.30043 342.1 2.70043 343.9 3.10043C345.6 2.90043 345 3.80043 346.2 3.90043C348.7 3.40043 353.1 3.80043 357 3.50043C358.1 3.40043 360.3 3.50043 360.9 2.70043C361.9 2.90043 362.2 3.30043 363.2 3.50043C364.2 3.70043 366.2 3.20043 366.3 3.90043C367.9 3.30043 370 3.90043 372.5 3.50043C372.8 3.40043 373.1 3.30043 373.3 3.10043C373.9 3.00043 374.1 3.60043 374.8 3.50043C375 3.30043 375.3 3.20043 375.6 3.10043C377.9 2.80043 380.2 2.80043 382.5 3.10043C383.2 3.20043 384.1 3.00043 384.8 3.10043C385.9 3.30043 387.9 3.70043 389.4 3.90043C389.1 3.90043 389.8 3.30043 390.2 3.50043C391.9 4.50043 396.5 2.90043 400.2 3.10043C402.5 2.60043 402.5 3.80043 404.1 3.90043C405 3.90043 405.5 3.90043 405.6 4.30043C407.3 3.00043 413.7 4.00043 414.8 2.40043C415.8 2.10043 416.1 2.80043 416.3 2.80043C417.8 2.90043 417.9 2.60043 420.2 2.40043H421.7C422.1 2.20043 422.3 2.10043 424.8 2.40043C426.5 2.60043 426.4 2.50043 428.7 2.80043C429 2.80043 429.3 3.00043 429.5 3.20043C430 3.20043 430.9 2.80043 431.8 2.80043C433.6 2.80043 435.5 3.20043 438.7 3.20043C439.4 3.20043 440.1 2.60043 440.2 3.20043C441.8 3.10043 442.3 2.40043 443.3 2.10043C445.8 2.70043 448.4 2.80043 451 2.50043C450.7 3.30043 451.5 3.50043 451.8 4.00043C458 3.50043 464 4.70043 468.8 2.10043C469.6 2.10043 470.4 2.20043 471.1 2.50043C472.3 2.70043 473.7 3.10043 474.9 2.50043V1.70043C475.4 1.70043 476.4 2.00043 477.2 2.10043C477.5 2.20043 477.8 2.30043 478 2.50043C478.6 2.60043 478.9 2.10043 478.8 2.10043C480.3 2.40043 481.9 2.70043 483.4 2.90043C486.5 3.20043 485.3 1.30043 488 1.40043C487.9 2.50043 490.3 2.30043 490.3 3.30043C490.3 3.30043 494.9 3.30043 495.3 3.20043C497.3 3.10043 499.4 3.00043 501.4 3.00043C502.3 3.00043 503.2 3.00043 504.1 3.10043C504.6 3.10043 505 3.20043 505.4 3.20043C505.6 3.20043 505.8 3.30043 506 3.30043C506.2 3.30043 506.3 3.20043 506.4 3.20043H506.8C506.9 3.20043 507 3.10043 507.1 3.10043C507.3 3.00043 507.6 2.90043 507.9 2.90043H508.3C508.5 2.90043 508.6 2.80043 508.8 2.80043C509 2.80043 509.2 2.90043 509.4 3.00043C509.8 3.10043 510.1 3.00043 510.5 2.80043C510.9 2.50043 511.4 2.30043 511.9 2.30043C512.1 2.30043 512.3 2.30043 512.5 2.20043C512.9 2.00043 513.2 1.80043 513.4 1.40043C513.5 1.20043 513.6 1.10043 513.8 1.10043H514.3C514.4 1.10043 514.6 1.00043 514.7 1.00043C515.1 1.00043 515.4 1.30043 515.7 1.60043C515.8 1.70043 515.9 1.90043 516 1.90043H516.4C517.1 1.90043 517.9 2.10043 518.6 2.10043C518.8 2.10043 519 2.10043 519.3 2.00043H519.8C520.4 1.90043 521 2.00043 521.6 2.10043C521.6 2.10043 521.6 2.20043 521.5 2.20043C521.7 2.20043 521.8 2.30043 522 2.30043H523C523.5 2.30043 523.9 2.40043 524.4 2.50043C524.8 2.70043 525.3 2.80043 525.7 2.80043C526 2.70043 526.3 2.50043 526.6 2.40043C526.9 2.30043 527.1 2.40043 527.3 2.30043C527.6 2.30043 527.9 2.30043 528.2 2.40043C528.4 2.40043 528.6 2.50043 528.7 2.60043C528.9 2.70043 528.9 3.00043 529 3.10043C529.1 3.20043 529.4 3.10043 529.5 3.10043C529.7 3.10043 529.9 3.10043 530.1 3.00043C530.3 2.90043 530.6 2.80043 530.9 2.70043C531.3 2.60043 531.7 3.20043 532.1 3.10043C532.9 2.90043 533.6 3.00043 534.3 2.40043C534.5 2.20043 534.7 2.10043 534.9 1.90043C535.2 1.70043 535.4 1.50043 535.6 1.30043C535.7 1.20043 535.8 1.10043 535.9 1.10043C536.2 1.10043 536.5 1.20043 536.8 1.30043C537.2 1.30043 537.6 1.40043 538 1.40043C538.2 1.40043 538.4 1.40043 538.6 1.30043C539.1 1.20043 539.7 1.20043 540.2 1.20043C540.8 1.20043 541.3 1.00043 541.9 0.900427H543.6C543.8 1.00043 543.9 1.20043 544.1 1.20043C544.3 1.20043 544.2 1.20043 544.4 1.10043C544.6 1.00043 544.8 1.00043 545 1.00043C545.2 1.00043 545.5 0.900427 545.7 0.900427C545.9 0.800427 545.9 0.900427 546.1 1.00043C546.4 1.20043 546.7 1.30043 547 1.30043C547.2 1.30043 547.3 1.10043 547.5 1.10043C547.7 1.00043 547.9 1.00043 548.1 1.00043H549.3C549.5 0.900427 549.8 0.800427 550 0.700427C550.2 0.600427 550.4 0.300427 550.6 0.200427C550.8 0.100427 551.2 0.300427 551.4 0.500427C551.6 0.700427 551.8 0.800427 552 1.00043C552.2 1.20043 552.1 1.10043 552.2 1.10043C552.4 1.10043 552.5 1.00043 552.7 0.900427C552.8 0.900427 553.1 0.800427 553.2 0.900427C553.3 1.00043 553.3 1.10043 553.3 1.20043C553.3 1.50043 553.6 1.70043 553.9 1.60043H554C554.4 1.50043 554.6 1.00043 555 1.30043C555.2 1.40043 555.3 1.50043 555.6 1.40043C555.8 1.30043 555.9 1.30043 556.1 1.30043C556.4 1.30043 556.7 1.40043 557 1.70043C557.3 1.90043 557.6 2.10043 558 2.10043C558.3 2.10043 558.5 1.70043 558.9 1.70043C559.1 1.70043 559.4 1.70043 559.6 1.80043C559.7 1.80043 559.8 1.90043 559.9 1.90043H562.1C562.2 1.90043 562.4 1.80043 562.5 1.80043H563.5C563.8 1.80043 564.1 1.90043 564.3 1.90043H564.9C565.1 1.90043 565.4 2.00043 565.6 2.00043H567.1C567.2 2.00043 567.3 1.90043 567.3 1.90043C567.5 1.80043 567.8 1.50043 568 1.50043C569 1.50043 569.2 2.20043 570.3 2.30043C570.9 2.30043 571.6 1.70043 572.6 1.90043C572.9 2.70043 576.1 2.50043 577.2 3.00043C578.7 3.10043 580.3 3.10043 581.8 3.00043C583 2.30043 582.4 3.10043 584.9 3.00043C586.7 2.90043 588.5 2.60043 590.3 2.20043C592 2.40043 591.9 2.30043 594.1 2.60043C594.4 2.60043 594.7 2.80043 594.9 3.00043C595.5 3.00043 595.7 2.60043 596.4 2.60043C596.7 2.60043 597 2.70043 597.2 3.00043C598.5 3.00043 598.9 2.70043 600.3 2.60043C604.8 2.30043 608.8 2.60043 612.6 1.80043C612.9 1.70043 614 1.90043 614.1 1.80043C615.2 1.20043 619 2.20043 620.3 1.40043C620.8 1.10043 620.9 0.700427 621.8 0.600427C623.2 0.600427 623.4 1.00043 624.9 1.00043C625.5 1.00043 626.2 0.400427 627.2 0.600427C627.4 0.600427 627.1 1.60043 628 1.40043C629.8 0.900427 631.5 1.30043 634.2 1.00043C634.8 0.900427 635 0.700427 635.7 0.600427H636.1L636.3 0.700427H636.8L638 0.600427C638.2 0.600427 638.3 0.600427 638.5 0.700427C638.7 0.800427 638.9 0.700427 639.2 0.800427H640Z" fill={color} />
                    </g>
                    <defs>
                        <clipPath id="clip0_168_580">
                            <rect width="181.328" height="10" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            case '12':
                return <svg width="182" height="10" className={className} viewBox="0 0 182 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_168_583)">
                        <path d="M0 0V4.3L0.1 4.1H0.4C0.6 4.2 0.7 4 0.9 4H1.1C1.3 4 1.5 4.1 1.7 4.1H1.9L2.1 4C2.2 4 2.4 3.9 2.5 3.9H5.9L6 3.8V3.7H6.1C6.1 3.7 6.2 3.7 6.2 3.6L6.3 3.5H6.6C6.9 3.5 7.3 3.5 7.6 3.3L8 3.1C8.2 3.1 8.3 3 8.5 3L8.7 2.9L8.9 2.7L9 2.6H9.5C9.6 2.6 9.7 2.5 9.8 2.5H10.7C11.3 3 12.1 3.1 13 3C14.2 2.8 14.7 2.2 16.5 2.2C18.2 2.5 20.9 2.2 23.6 2.5C24.8 2.7 25.9 2.9 27.1 3C28.8 2.8 30.7 2.7 32.4 2.5C33.5 2.5 33.8 3 35.3 3C37.4 2.9 38 2.1 40 1.9C43.2 2.2 44 2 47.1 2.2C47 2.7 47.8 2.7 48.3 3C48.5 3.1 48.1 3.4 48.3 3.5C48.5 3.6 49.6 3.5 49.5 3.8C52.6 3.8 54.9 2.6 57.7 2.2C58.8 2 60 2.3 61.2 2.2C62.7 2.1 63.2 1.6 64.7 1.4C65 1.8 65.4 2 65.9 2.2C66.1 1.9 66.9 1.6 67.1 1.9C68.3 1.9 67.9 1.2 69.4 1.4C70.6 2.2 71.8 1.4 73.5 1.9C74.8 1.3 76.2 1.1 77.6 1.1C77.7 1.5 77.4 2.1 78.2 2.2C79.5 1.5 79.8 1.8 80.5 2.2C82.7 1.3 85.8 1.5 88.1 1.4C88.7 1.4 88.5 1.2 88.7 1.1C89.1 1.1 89.5 1.2 89.9 1.4C90.5 1.4 90.2 1.2 90.5 1.1C90.9 1.1 91.3 1.2 91.7 1.4L94.1 1.1C95.4 1.1 96.8 1.5 98.2 1.1C99 1.5 101.6 2 100 2.7C101.6 2.6 103.1 2.6 104.7 2.7C105.1 2.7 105.4 3 105.3 3C105.9 3 106.5 2.9 107.1 2.7C107.9 2.7 108.7 2.8 109.5 3C109.3 3 110 2.7 110.1 2.7H110.7C110.9 2.7 111.1 2.6 111.3 2.4C112.1 2.4 112.9 2.5 113.6 2.7C113.7 2.7 113.5 2.2 113.6 2.2C114.4 2.1 115.2 2.1 116 2.2C116.8 2.3 117.6 2.3 118.3 2.2C119.6 2.2 121.2 1.9 122.4 1.9C123.1 1.9 123.3 2.2 124.2 2.2C126.2 2.2 125.6 1.7 126.5 2.2C127.3 2.4 128.1 2.4 128.9 2.5C130 2.5 130.2 2.2 131.2 2.2C132 2.2 132 2.5 133 2.5C133.6 2.5 134 2.3 134.8 2.2C137.9 1.9 141.1 1.8 144.2 1.9C145.2 2 145.4 2.2 146.5 2.2C147.6 2.2 148.8 1.7 150 1.7C151.4 1.6 152.8 1.7 154.2 1.9C154.9 1.2 158.3 1.6 158.3 1.6C158.5 1.6 158.3 1.3 158.9 1.3C161.7 1.2 163.3 1.9 164.8 1.3C165.6 1.3 165.3 1.8 166 1.8C166.2 1.4 167.3 1.6 167.8 1.8C168.6 0.9 173.7 1.3 175.4 1.3C175.7 1.3 176.1 1 176 1C176.6 1 176.7 1.3 177.2 1.3C178.1 1.3 177.8 1 178.4 1.3C179.4 1.4 180.4 1.4 181.3 1.3C182.8 1.3 184.4 1.1 185.9 1H188.2C188.4 1 188.7 1 188.9 1.1C189.6 1.5 190.4 1.9 191.2 2.2C193 1.8 193.5 2.3 194.7 1.9C195.3 2.1 194.9 2.9 196.5 2.7C198.4 2.9 198.3 2.3 199.4 2.2C201 2.9 204.3 2.1 205.9 1.9C206.1 2.3 207.2 2.2 207.7 2.4C207.5 1.8 208.4 2 209.5 1.9C210.8 1.8 212.7 1.5 214.2 1.4C215 1.5 214.9 2 215.4 2.2C218.5 1.7 221.7 1.7 224.8 2.2C225.6 2.1 225.5 1.6 226 1.4C226.8 1.5 227.6 1.4 228.4 1.1C228.4 1.8 230 1.8 230.7 2.2C232.4 2.2 234.1 2.5 236 2.5C236.6 2.5 236.6 2.3 237.2 2.2C237.8 2.1 238.4 2.2 239 2.2C239.5 2.2 239.8 1.9 240.2 1.9C240 1.9 240.6 2.2 240.8 2.2C242.5 2.4 244.3 1.6 246.1 1.9C246.3 1.9 246.4 2.4 246.7 2.4C247.4 2.5 247.9 1.9 249 2.1C249 2.5 250.1 2.2 250.8 2.4C251.3 2.5 251.4 3.1 252.6 2.9C254 2.6 256.8 2 258.5 2.6C259.3 1.8 262.2 1.8 263.8 1.8C264 1.8 264.2 1.9 264.4 2.1C265.5 2.2 267.1 2 267.9 2.1C269 2.2 269.2 2.6 270.3 2.6C272.3 2.6 274.2 2.6 276.2 2.3C276.8 2.2 277.4 2.2 278 2.3C280.2 2.5 279.3 1.9 280.4 1.8C281.2 2 280.5 2.8 281.6 2.9C282.9 2.3 285.4 2.1 288.1 2.1C288.9 2 288.4 2.5 288.7 2.6C289.2 2.8 290.5 2.5 290.5 2.9C291.3 2.9 292.1 2.7 292.8 2.4H294C295 2.4 296 2.2 296.9 1.9C298.8 1.5 298.9 1.9 300.4 1.9C301.2 1.9 301.5 1.5 302.7 1.6C302.8 1.6 303.6 1.9 303.3 1.9C304.3 1.9 305.5 1.4 306.8 1.6C307.7 1.8 307.3 2 308.6 2.1H309.2C309.4 2.1 309.6 2 309.8 1.8C310.8 1.8 310.7 2.3 311.6 1.8C312.3 1.4 314 2.1 314.5 2.1C314.2 2.1 315.1 1.8 315.1 1.8L316.3 1.5C318 2 319.8 2.3 321.6 2.3C322.1 2.3 322.5 2 322.8 2C323.1 2.1 322.7 2.6 323.4 2.5C323.3 2.5 323.5 2.4 323.5 2.4C323.8 2.3 324.1 2.2 324.4 2.2C324.6 2.2 324.7 2.1 324.9 2.1C325.2 2.1 325.4 2.2 325.5 2.3C325.7 2.4 326 2.4 326 2.5C326.1 2.5 326.1 2.7 326.2 2.8C326.3 2.9 326.4 2.9 326.5 3C326.6 3.2 326.7 3.4 326.9 3.4C327.1 3.4 327.3 3.3 327.5 3.3C327.7 3.3 327.9 3.1 328.1 3.1C328.4 3 328.8 3.2 329.1 3.1L330.3 2.9C331.4 2.7 332 3 332.6 2.6C332.8 2.5 333.6 2.6 333.8 2.6C334.3 2.3 335 2.2 335.6 2.3C336.7 2.3 337.4 2.7 338.5 2.8C339.1 2.8 339 2.5 339.1 2.5C339.6 2.5 339.6 2.8 339.7 2.8C341 2.8 342.7 2.9 343.2 2.8C343.4 2.8 344 2.5 343.8 2.5C345.8 2.4 345.2 3 346.2 2.5C347.2 2.3 348.2 2.2 349.1 2.2C350.3 2 350.8 1.8 352 1.7C353.2 1.6 354.6 1.8 356.1 1.7C356.7 1.7 356.8 1.4 357.3 1.4C359.4 1.2 359.5 1.7 360.8 1.7C362 2 363 2.5 363.7 2.8C364 2.9 364.4 3 364.7 3L365.6 3.3C366.1 3.4 366.5 3.4 367 3.4C367.5 3.4 367.8 3 368.3 3H369.3C369.9 3.1 370.6 3.2 371.2 3.4C371.7 3.5 372.2 3.5 372.7 3.3L373.8 3C374.1 2.9 374.4 2.9 374.7 2.9C375.1 2.8 375.5 2.8 376 2.7C376.1 2.6 376.3 2.6 376.5 2.7C376.7 2.8 376.8 3 377 3.2C377.2 3.4 377.4 3.6 377.6 3.7C377.7 3.8 377.8 3.9 378 4C378.2 4.1 378.4 4.1 378.5 4.2C378.7 4.3 379 4.3 379.3 4.3C379.7 4.3 380.1 4.2 380.5 4.2C380.7 4.2 380.9 4.2 381 4.1C381.1 4 381.1 3.8 381.2 3.8C381.3 3.8 381.4 4 381.6 3.9C381.8 3.8 381.6 3.5 381.8 3.5C382 3.5 382 3.6 382.3 3.6C382.6 3.6 382.9 3.7 383.2 3.7C383.3 3.7 383.5 3.8 383.6 3.7C383.7 3.6 383.7 3.5 383.8 3.4C384.1 3.1 384.4 3 384.8 3C385.2 3 385.6 3 385.9 3.1C386.1 3.2 386.2 3.2 386.4 3.2C386.8 3.1 387.2 2.9 387.6 2.8C388.2 2.7 388.7 2.6 389.3 2.6C389.7 2.5 390.1 2.6 390.4 2.5H390.9C391.1 2.5 391.7 2.6 391.8 2.7V3C391.8 3.2 391.7 3.4 391.9 3.6C392 3.7 392.2 3.8 392.4 3.8C392.7 3.8 392.9 3.9 393.2 4C393.4 4.1 394 4.2 394.1 4.2C394.2 4.2 394.3 4 394.5 4C394.7 3.9 394.9 3.9 395.1 3.8H395.7C396 3.9 396.2 4.1 396.6 4.1C396.8 4.1 397 4.1 397.2 3.9L397.8 3.6L398.7 3C399 2.8 399.3 2.7 399.6 2.7H400.3L401.3 2.8C402.2 2.9 403.1 2.8 403.9 2.5C404.2 2.3 404.5 2.2 404.8 2H405.3C405.5 2 405.7 1.9 406 1.9C406.4 1.9 406.8 1.8 407.3 1.8C407.6 1.8 407.9 1.9 408.2 2C408.8 2 409.3 2 409.9 1.9C410.6 1.8 411.3 1.8 412 1.9H414C414.5 1.9 415 2 415.5 2C416.1 2.1 416.6 2.3 417.1 2.5C417.3 2.5 417.5 2.6 417.7 2.6H419.3C419.5 2.7 419.5 2.7 419.7 2.6C419.8 2.5 419.9 2.4 420 2.4C420.2 2.3 420.2 2.4 420.4 2.5C420.7 2.7 421 2.7 421.3 2.6C421.4 2.5 421.4 2.5 421.4 2.4C421.4 2.3 421.4 2.3 421.5 2.3C421.8 2.1 422.2 2.3 422.4 2.6C422.5 2.8 422.5 3 422.6 3.1C422.7 3.2 422.6 3.2 422.7 3.2L423.1 3.3L423.6 3.4C423.9 3.4 424.2 3.5 424.5 3.7C424.7 3.9 424.7 4 425 4C425.2 4 425.4 3.9 425.6 3.9C425.8 3.9 425.8 4 426.1 4C426.4 4 426.8 3.9 427.1 4C427.3 4 427.4 4.1 427.6 4.1C427.8 4.1 428 4.2 428.2 4.1C429.3 4 430 3.8 431.2 3.8C432.1 3.8 433.1 4 434.1 4.1C435.5 4.2 436.9 4.2 438.4 4.2H440.2C440.5 4.2 440.8 4.2 441.1 4.3C441.3 4.4 441.4 4.5 441.6 4.5C441.9 4.5 442.2 4.6 442.5 4.6H443.3C443.5 4.6 443.7 4.6 443.9 4.5C444 4.5 444 4.4 444.1 4.3C444.2 4.2 444.2 4.2 444.4 4.2C444.6 4.2 444.8 4.1 445 4.1C445.5 4 446.1 4.1 446.5 4C446.9 4 447.2 4 447.5 3.7L447.8 3.4C447.9 3.3 447.9 3.2 448 3.2H448.3C448.4 3.2 448.6 3.1 448.7 3.1H449.8C450 3.1 450.2 3 450.4 3H450.7C450.7 3 450.8 3 450.8 2.9C450.9 2.9 451.1 3 451.2 3C451.5 3.1 451.8 3.1 452.1 3.2C452.2 3.2 452.3 3.3 452.3 3.3C452.5 3.3 452.7 3.3 452.9 3.2C453.1 3.1 453.2 3.1 453.4 3.1C453.5 3.1 453.7 3.1 453.8 3.2C454.1 3.3 454.4 3.3 454.7 3.2C455.5 3.1 456.3 3.1 457.1 3.3C457.2 3.3 457.3 3.4 457.4 3.4C457.5 3.4 457.5 3.6 457.6 3.6H458.7C459 3.6 459.3 3.8 459.6 3.8C459.8 3.8 459.9 3.7 460 3.7H460.4C460.9 3.8 461.5 3.8 462.1 3.9C462.5 4 463 4 463.4 3.9C463.7 3.8 463.9 3.7 464.2 3.6C464.7 3.5 465.1 3.5 465.6 3.4H470C470.9 3.3 471.9 3.5 472.9 3.4C473.7 3.3 474.5 3.2 475.2 3.1C476.4 3.1 476.2 3.5 477.6 3.6C477.3 3.6 478.1 3.3 478.2 3.3C481 3 479.8 4.2 481.1 3.6C482.7 2.9 483 4.2 484 3.6C484.3 3.4 484.7 3.9 484.6 3.9C487.3 4.1 490.1 4.1 492.8 3.9C493.8 3.8 494.8 3.9 495.8 3.9C496.2 3.9 495.8 3.6 496.4 3.9C496.7 4.1 497.1 3.6 497 3.6C498.1 3.6 498.3 3.9 499.3 3.9C499.1 3.9 499.7 3.6 499.9 3.6C502 3.3 503.4 4 504.6 4.1C508 4.3 509 3.6 511.1 3.6C513.1 3.6 514.9 3.8 517 3.9C519 4 520.8 3.8 522.9 3.9C523.7 3.9 523.6 4.1 524.7 4.2C525.8 4.3 526.8 3.8 527.8 4C528.5 4.1 529.1 4.1 529.8 4C530.3 3.9 530.8 3.8 531.3 3.6L531.9 3.3C532.6 3 533.4 2.9 534.1 2.9L536 2.8C536.3 2.8 536.6 2.8 536.8 2.7L537.4 2.4C537.6 2.3 537.8 2.2 538 2.2C538.2 2.2 538.4 2.4 538.6 2.5C538.8 2.6 539 2.6 539.3 2.6H539.8C540 2.5 540.2 2.4 540.3 2.3C540.5 2.2 540.8 2.2 541 2.2C541.2 2.2 541.3 2.1 541.5 2.1H545.7C546 2.1 546.2 2 546.5 2C546.6 2 546.6 1.9 546.8 2C547.1 2.1 547.3 2.5 547.6 2.6H547.8C548 2.6 548.2 2.6 548.3 2.7C548.5 2.8 548.7 2.7 548.8 2.8C549.1 2.9 549.4 3 549.6 3.1H549.9C550 3.1 550 3.3 550.1 3.3C550.5 3.5 551 3.1 551.3 3.1C553.5 3.1 555.6 3.3 557.8 3.6C558.8 3.7 560.6 3.8 561.9 3.9C562.5 3.8 563.1 3.8 563.7 3.6C564.2 3.6 564.8 4.2 564.9 3.9C565 3.6 566.3 3.6 566.7 3.4C566.6 3.5 566.8 3.6 566.8 3.6C567 3.7 567.2 3.7 567.3 3.7H568.3C568.5 3.8 568.5 3.9 568.6 4C568.8 4.1 569.1 4.1 569.2 4.1C569.3 4.1 569.4 4.2 569.4 4.2C569.4 4.3 569.3 4.4 569.4 4.5H569.9C570.1 4.5 570.3 4.5 570.5 4.4C570.7 4.3 570.8 4.4 570.9 4.3C571 4.3 571 4.1 571.1 4.1C571.2 4.1 571.3 4 571.3 4C571.4 4 571.6 4.1 571.7 4.1C571.9 4.2 572.1 4.2 572.3 4.2C572.7 4.2 573 4.1 573.4 4.1C573.6 4.1 574 4.2 574.2 4C574.3 3.8 574.2 3.6 574 3.6C574.1 3.4 574.4 3.5 574.6 3.5C574.9 3.6 575.2 3.7 575.5 3.7C575.7 3.6 575.8 3.4 575.8 3.3C575.8 3.2 575.7 3.2 575.6 3.1C575.6 3 575.6 2.8 575.7 2.8C575.8 2.8 576.2 2.9 576.2 2.8V2.5C576.2 2.4 576.2 2.3 576.3 2.3C576.4 2.3 576.5 2.4 576.6 2.4H577C577.2 2.4 577.2 2.2 577.3 2.2C577.5 2.1 577.7 2.1 577.9 2.2C578.1 2.2 578.3 2.3 578.5 2.4C578.6 2.4 578.7 2.5 578.8 2.6C579.1 2.8 579.5 2.8 579.8 2.7C579.9 2.6 580.1 2.6 580.3 2.6C580.5 2.6 580.5 2.6 580.5 2.4C580.5 2.3 580.5 2.1 580.6 2C580.8 1.8 580.8 1.9 581.1 2.1C581.4 2.3 581.8 2.2 582.1 2.2C583.1 2.4 584.2 2.4 585.3 2.4H586.6C586.8 2.4 587.1 2.3 587.2 2.1C587.8 2.1 587.9 2.4 588.4 2.4C589.2 2.4 589.2 2 590.2 2.1C590.2 2.6 591.7 2.2 592.5 2.4C593.4 2.5 593.8 3.1 594.8 2.9C594.9 2.7 594.8 2.4 595.4 2.4C596.6 3.1 600.3 3.1 601.9 2.9C603.4 3.7 606.7 3.5 608.4 3.7C608.6 3.7 609.2 4 609 4C610.6 4 612 3.5 613.7 3.7C615.1 4.1 617.5 4.1 619 4.5C618.9 4 619.6 3.9 620.8 4C622.1 4.4 625.2 4 625.5 4.8C627.2 4.7 627.6 4.3 628.4 4.8C628.7 5 629.1 4.5 629 4.5H631.9C632.3 4.5 632 4.2 632.5 4.5C633 4.8 634.7 4.2 634.8 4.2C635.7 4.2 635.4 4.5 636 4.2H637.2C637.4 4.2 637.5 4.2 637.7 4.1C637.8 4 637.8 4 637.9 4H638.8L639 4.1H639.3C639.4 4.1 639.5 4.1 639.6 4.2H640.3V0H0Z" fill={color} />
                    </g>
                    <defs>
                        <clipPath id="clip0_168_583">
                            <rect width="181.328" height="10" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            case '21': <svg className={className} width="182" height="10" viewBox="0 0 182 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_168_587)">
                    <path d="M0.328125 3V0C5.32812 0 5.32812 2 10.3281 2C15.3281 2 15.3281 0 20.3281 0C25.3281 0 25.3281 2 30.3281 2C35.3281 2 35.3281 0 40.3281 0C45.3281 0 45.3281 2 50.3281 2C55.3281 2 55.3281 0 60.3281 0C65.3281 0 65.3281 2 70.3281 2C75.3281 2 75.3281 0 80.3281 0C85.3281 0 85.3281 2 90.3281 2C95.3281 2 95.3281 0 100.328 0C105.428 0 105.428 2 110.328 2C115.328 2 115.328 0 120.328 0H120.428C125.428 0 125.428 2 130.328 2C135.328 2 135.328 0 140.328 0H140.428C145.428 0 145.428 2 150.328 2C155.328 2 155.328 0 160.328 0H160.428C165.428 0 165.428 2 170.328 2C175.328 2 175.328 0 180.328 0H180.428C185.428 0 185.428 2 190.328 2C195.328 2 195.328 0 200.328 0H200.428C205.428 0 205.428 2 210.328 2C215.328 2 215.328 0 220.328 0H220.428C225.428 0 225.428 2 230.328 2C235.328 2 235.328 0 240.328 0H240.428C245.428 0 245.428 2 250.328 2C255.328 2 255.328 0 260.328 0H260.428C265.428 0 265.428 2 270.328 2C275.328 2 275.328 0 280.328 0H280.428C285.428 0 285.428 2 290.328 2C295.328 2 295.328 0 300.328 0H300.428C305.428 0 305.428 2 310.328 2C315.328 2 315.328 0 320.328 0H320.428C325.428 0 325.428 2 330.328 2C335.328 2 335.328 0 340.328 0H340.428C345.428 0 345.428 2 350.328 2C355.328 2 355.328 0 360.328 0H360.428C365.428 0 365.428 2 370.328 2C375.328 2 375.328 0 380.328 0H380.428C385.428 0 385.428 2 390.328 2H390.428C395.428 2 395.428 0 400.428 0C405.428 0 405.428 2 410.428 2C415.428 2 415.428 0 420.428 0C425.428 0 425.428 2 430.428 2C435.428 2 435.428 0 440.428 0C445.428 0 445.428 2 450.428 2C455.428 2 455.428 0 460.428 0C465.428 0 465.428 2 470.428 2C475.428 2 475.428 0 480.428 0C485.428 0 485.428 2 490.428 2C495.428 2 495.428 0 500.428 0C505.428 0 505.428 2 510.428 2C515.428 2 515.428 0 520.428 0C525.428 0 525.428 2 530.428 2C535.428 2 535.428 0 540.428 0C545.428 0 545.428 2 550.428 2C555.428 2 555.428 0 560.428 0C565.428 0 565.428 2 570.428 2C575.428 2 575.428 0 580.428 0C585.428 0 585.428 2 590.428 2C595.428 2 595.428 0 600.428 0C605.428 0 605.428 2 610.428 2C615.428 2 615.428 0 620.428 0C625.428 0 625.428 2 630.428 2C635.428 2 635.428 0 640.428 0V3H0.328125Z" fill={color} />
                </g>
                <defs>
                    <clipPath id="clip0_168_587">
                        <rect width="181.328" height="10" fill="white" transform="translate(0.328125)" />
                    </clipPath>
                </defs>
            </svg>

            case '22':
                <svg width="182" className={className} height="10" viewBox="0 0 182 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_168_590)">
                        <path d="M640.328 0V3C635.328 3 635.328 1 630.328 1C625.328 1 625.328 3 620.328 3C615.328 3 615.328 1 610.328 1C605.328 1 605.328 3 600.328 3C595.328 3 595.328 1 590.328 1C585.328 1 585.328 3 580.328 3C575.328 3 575.328 1 570.328 1C565.328 1 565.328 3 560.328 3C555.328 3 555.328 1 550.328 1C545.328 1 545.328 3 540.328 3C535.228 3 535.228 1 530.328 1C525.328 1 525.328 3 520.328 3H520.228C515.228 3 515.228 1 510.328 1C505.328 1 505.328 3 500.328 3H500.228C495.228 3 495.228 1 490.328 1C485.328 1 485.328 3 480.328 3H480.228C475.228 3 475.228 1 470.328 1C465.328 1 465.328 3 460.328 3H460.228C455.228 3 455.228 1 450.328 1C445.328 1 445.328 3 440.328 3H440.228C435.228 3 435.228 1 430.328 1C425.328 1 425.328 3 420.328 3H420.228C415.228 3 415.228 1 410.328 1C405.328 1 405.328 3 400.328 3H400.228C395.228 3 395.228 1 390.328 1C385.328 1 385.328 3 380.328 3H380.228C375.228 3 375.228 1 370.328 1C365.328 1 365.328 3 360.328 3H360.228C355.228 3 355.228 1 350.328 1C345.328 1 345.328 3 340.328 3H340.228C335.228 3 335.228 1 330.328 1C325.328 1 325.328 3 320.328 3H320.228C315.228 3 315.228 1 310.328 1C305.328 1 305.328 3 300.328 3H300.228C295.228 3 295.228 1 290.328 1C285.328 1 285.328 3 280.328 3H280.228C275.228 3 275.228 1 270.328 1C265.328 1 265.328 3 260.328 3H260.228C255.228 3 255.228 1 250.328 1H250.228C245.228 1 245.228 3 240.228 3C235.228 3 235.228 1 230.228 1C225.228 1 225.228 3 220.228 3C215.228 3 215.228 1 210.228 1C205.228 1 205.228 3 200.228 3C195.228 3 195.228 1 190.228 1C185.228 1 185.228 3 180.228 3C175.228 3 175.228 1 170.228 1C165.228 1 165.228 3 160.228 3C155.228 3 155.228 1 150.228 1C145.228 1 145.228 3 140.228 3C135.228 3 135.228 1 130.228 1C125.228 1 125.228 3 120.228 3C115.228 3 115.228 1 110.228 1C105.228 1 105.228 3 100.228 3C95.2281 3 95.2281 1 90.2281 1C85.2281 1 85.2281 3 80.2281 3C75.2281 3 75.2281 1 70.2281 1C65.2281 1 65.2281 3 60.2281 3C55.2281 3 55.2281 1 50.2281 1C45.2281 1 45.2281 3 40.2281 3C35.2281 3 35.2281 1 30.2281 1C25.2281 1 25.2281 3 20.2281 3C15.2281 3 15.2281 1 10.2281 1C5.22812 1 5.32812 3 0.328125 3V0H640.328Z" fill={color} />
                    </g>
                    <defs>
                        <clipPath id="clip0_168_590">
                            <rect width="181.328" height="10" fill="white" transform="translate(0.328125)" />
                        </clipPath>
                    </defs>
                </svg>

        }
    }

    return (
        renderIcon(index)
    )
}

export default Icons
