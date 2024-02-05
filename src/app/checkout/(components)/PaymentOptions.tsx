import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, PlusIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function PaymentOptions() {
  return (
    <div>
      <Card>
        <CardContent>
          <CardHeader>
            <CardTitle>Payment Options</CardTitle>
          </CardHeader>
          <Tabs defaultValue="upi">
            <TabsList className="space-x-2 bg-transparent">
              <TabsTrigger value="upi" className="flex flex-col h-auto">
                <Image
                  src="/upi_logo_icon_169316.svg"
                  width={45}
                  height={45}
                  alt="not found"
                />
                UPI
              </TabsTrigger>
              <TabsTrigger
                value="card"
                className="h-auto flex flex-col 
              "
              >
                <CreditCard />
                Card
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="upi"
              className="space-y-4 pt-6 grid grid-flow-row gap-1 grid-cols-3"
            >
              <div className="flex gap-3 items-center">
                <Button variant="outline" size="lg">
                  <svg
                    height="64px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 64 64"
                    width="64px"
                  >
                    <g>
                      <g>
                        <path
                          d="M49.2,28.2h-3.4c-0.2,0-0.4,0.2-0.5,0.4l-1.4,8.8c0,0.2,0.1,0.3,0.3,0.3h1.8c0.2,0,0.3-0.1,0.3-0.3    l0.4-2.5c0-0.2,0.2-0.4,0.5-0.4h1.1c2.3,0,3.6-1.1,3.9-3.3c0.2-0.9,0-1.7-0.4-2.2C51.2,28.5,50.3,28.2,49.2,28.2 M49.6,31.5    c-0.2,1.2-1.1,1.2-2,1.2H47l0.4-2.3c0-0.1,0.1-0.2,0.3-0.2h0.2c0.6,0,1.2,0,1.5,0.4C49.6,30.7,49.6,31,49.6,31.5"
                          fill="#139AD6"
                        />
                      </g>
                      <g>
                        <path
                          d="M24.7,28.2h-3.4c-0.2,0-0.4,0.2-0.5,0.4l-1.4,8.8c0,0.2,0.1,0.3,0.3,0.3h1.6c0.2,0,0.4-0.2,0.5-0.4    l0.4-2.4c0-0.2,0.2-0.4,0.5-0.4h1.1c2.3,0,3.6-1.1,3.9-3.3c0.2-0.9,0-1.7-0.4-2.2C26.7,28.5,25.9,28.2,24.7,28.2 M25.1,31.5    c-0.2,1.2-1.1,1.2-2,1.2h-0.5l0.4-2.3c0-0.1,0.1-0.2,0.3-0.2h0.2c0.6,0,1.2,0,1.5,0.4C25.1,30.7,25.2,31,25.1,31.5"
                          fill="#263B80"
                        />
                      </g>
                      <g>
                        <path
                          d="M35,31.4h-1.6c-0.1,0-0.3,0.1-0.3,0.2L33,32.1l-0.1-0.2c-0.4-0.5-1.1-0.7-1.9-0.7c-1.8,0-3.4,1.4-3.7,3.3    c-0.2,1,0.1,1.9,0.6,2.5c0.5,0.6,1.2,0.8,2.1,0.8c1.5,0,2.3-0.9,2.3-0.9l-0.1,0.5c0,0.2,0.1,0.3,0.3,0.3h1.5    c0.2,0,0.4-0.2,0.5-0.4l0.9-5.6C35.3,31.6,35.1,31.4,35,31.4 M32.7,34.6c-0.2,0.9-0.9,1.6-1.9,1.6c-0.5,0-0.9-0.2-1.1-0.4    c-0.2-0.3-0.3-0.7-0.3-1.2c0.1-0.9,0.9-1.6,1.8-1.6c0.5,0,0.8,0.2,1.1,0.4C32.6,33.7,32.7,34.2,32.7,34.6"
                          fill="#263B80"
                        />
                      </g>
                      <g>
                        <path
                          d="M59.4,31.4h-1.6c-0.1,0-0.3,0.1-0.3,0.2l-0.1,0.5l-0.1-0.2c-0.4-0.5-1.1-0.7-1.9-0.7    c-1.8,0-3.4,1.4-3.7,3.3c-0.2,1,0.1,1.9,0.6,2.5c0.5,0.6,1.2,0.8,2.1,0.8c1.5,0,2.3-0.9,2.3-0.9l-0.1,0.5c0,0.2,0.1,0.3,0.3,0.3    h1.5c0.2,0,0.4-0.2,0.5-0.4l0.9-5.6C59.7,31.6,59.6,31.4,59.4,31.4 M57.1,34.6c-0.2,0.9-0.9,1.6-1.9,1.6c-0.5,0-0.9-0.2-1.1-0.4    c-0.2-0.3-0.3-0.7-0.3-1.2c0.1-0.9,0.9-1.6,1.8-1.6c0.5,0,0.8,0.2,1.1,0.4C57.1,33.7,57.2,34.2,57.1,34.6"
                          fill="#139AD6"
                        />
                      </g>
                      <g>
                        <g>
                          <path
                            d="M43.7,31.4h-1.7c-0.2,0-0.3,0.1-0.4,0.2L39.4,35l-1-3.2c-0.1-0.2-0.2-0.3-0.5-0.3h-1.6     c-0.2,0-0.3,0.2-0.3,0.4l1.8,5.3l-1.7,2.4c-0.1,0.2,0,0.5,0.2,0.5h1.6c0.2,0,0.3-0.1,0.4-0.2l5.5-7.9     C44.1,31.7,43.9,31.4,43.7,31.4"
                            fill="#263B80"
                          />
                        </g>
                        <g>
                          <path
                            d="M61.3,28.5l-1.4,9c0,0.2,0.1,0.3,0.3,0.3h1.4c0.2,0,0.4-0.2,0.5-0.4l1.4-8.8c0-0.2-0.1-0.3-0.3-0.3h-1.6     C61.5,28.2,61.4,28.3,61.3,28.5"
                            fill="#139AD6"
                          />
                        </g>
                        <g>
                          <path
                            d="M12,25.2C11.3,24.4,10,24,8.2,24h-5c-0.3,0-0.6,0.3-0.7,0.6L0.5,37.7c0,0.3,0.2,0.5,0.4,0.5H4l0.8-4.9     l0,0.2c0.1-0.3,0.4-0.6,0.7-0.6h1.5c2.9,0,5.1-1.2,5.8-4.5c0-0.1,0-0.2,0-0.3c-0.1,0-0.1,0,0,0C12.9,26.8,12.7,26,12,25.2"
                            fill="#263B80"
                          />
                        </g>
                      </g>
                      <g>
                        <path
                          d="M12.7,28.1L12.7,28.1c0,0.1,0,0.2,0,0.3c-0.7,3.4-2.9,4.5-5.8,4.5H5.4c-0.3,0-0.6,0.3-0.7,0.6l-1,6.1    c0,0.2,0.1,0.4,0.4,0.4h2.6c0.3,0,0.6-0.2,0.6-0.5l0-0.1l0.5-3.1l0-0.2c0-0.3,0.3-0.5,0.6-0.5h0.4c2.5,0,4.5-1,5-4    c0.2-1.2,0.1-2.3-0.5-3C13.2,28.4,13,28.2,12.7,28.1"
                          fill="#139AD6"
                        />
                      </g>
                      <g>
                        <path
                          d="M12,27.8c-0.1,0-0.2-0.1-0.3-0.1c-0.1,0-0.2,0-0.3-0.1c-0.4-0.1-0.8-0.1-1.3-0.1H6.2c-0.1,0-0.2,0-0.3,0.1    c-0.2,0.1-0.3,0.3-0.3,0.5l-0.8,5.2l0,0.2c0.1-0.3,0.4-0.6,0.7-0.6h1.5c2.9,0,5.1-1.2,5.8-4.5c0-0.1,0-0.2,0.1-0.3    c-0.2-0.1-0.3-0.2-0.5-0.2C12.1,27.8,12.1,27.8,12,27.8"
                          fill="#232C65"
                        />
                      </g>
                    </g>
                  </svg>
                </Button>
                <Button variant="outline" size="lg">
                  <svg
                    width="100"
                    height="100"
                    viewBox="0 0 1366 768"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4_7)">
                      <mask
                        id="mask0_4_7"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="1366"
                        height="768"
                      >
                        <path d="M1366 0H0V768H1366V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_4_7)">
                        <path
                          d="M332.63 514.18C328.75 513.8 324.85 513.54 320.99 513.03C295.73 509.68 273.23 499.96 253.81 483.43C233.509 466.344 219.027 443.365 212.37 417.68C208.664 403.821 207.385 389.425 208.59 375.13C210.59 350.18 218.92 327.52 234.09 307.62C255.33 279.75 283.42 262.72 318.09 257.57C355.93 251.94 390.09 261.49 419.6 285.7C445.03 306.53 460.37 333.64 465.03 366.16C470.53 404.51 460.67 438.95 435.65 468.6C414.58 493.6 387.41 508.03 355.12 512.9C351.07 513.52 346.96 513.76 342.88 514.18H332.63ZM308.85 343.18C298.42 343.18 288 343.18 277.57 343.18C274.79 343.18 273.8 344.02 273.57 346.76C273.315 349.424 273.365 352.108 273.72 354.76C273.997 356.995 275.085 359.05 276.777 360.536C278.469 362.022 280.648 362.835 282.9 362.82C285.3 362.87 287.7 362.82 290.1 362.82C293.1 362.82 293.1 362.82 293.1 365.77C293.1 376.937 293.1 388.103 293.1 399.27C293.094 403.727 293.675 408.165 294.83 412.47C298.04 424.47 305.04 433.06 317.19 436.64C327.34 439.64 337.53 438.91 347.55 435.64C349.9 434.87 349.94 434.87 349.95 437.36C349.95 444.28 349.9 451.2 349.95 458.12C349.93 459.602 350.207 461.072 350.766 462.445C351.324 463.817 352.153 465.063 353.202 466.11C354.251 467.156 355.499 467.981 356.873 468.536C358.247 469.091 359.718 469.364 361.2 469.34C364.49 469.34 367.79 469.4 371.08 469.34C371.648 469.352 372.212 469.249 372.739 469.038C373.265 468.826 373.744 468.509 374.145 468.107C374.545 467.705 374.861 467.226 375.071 466.699C375.282 466.172 375.384 465.608 375.37 465.04C375.37 464.22 375.37 463.4 375.37 462.58C375.37 430.3 375.37 398.03 375.37 365.77C375.37 362.09 375.37 362.09 378.95 362.09C383.13 362.09 387.32 362.09 391.5 362.09C394.6 362.09 395.5 361.14 395.5 357.99C395.5 355.943 395.5 353.887 395.5 351.82C395.43 346.22 391.67 342.49 386.02 342.44C381.08 342.4 376.143 342.4 371.21 342.44C370.562 342.484 369.912 342.37 369.318 342.107C368.724 341.844 368.203 341.44 367.8 340.93C365.95 338.73 364.03 336.58 362.14 334.42C351.38 321.987 340.597 309.573 329.79 297.18C328.523 295.592 326.908 294.315 325.071 293.448C323.233 292.582 321.221 292.148 319.19 292.18C312.52 292.26 306.6 295.18 300.45 297.25C298.58 297.87 298.38 300.25 299.69 301.75C300.151 302.258 300.639 302.742 301.15 303.2C314.43 315.807 327.713 328.407 341 341C341.48 341.45 342.36 341.88 342.14 342.57C341.86 343.47 340.85 343.1 340.14 343.1C329.71 343.1 319.29 343.1 308.86 343.1M1158.42 427C1157.04 429.26 1155.06 430.07 1152.37 430.05C1138.72 429.95 1125.07 430.05 1111.42 429.96C1109.42 429.96 1108.52 430.42 1108.6 432.55C1108.67 434.11 1108.26 435.68 1108.24 437.25C1108.13 444.8 1112.99 449.86 1120.57 450.41C1128.15 450.96 1135.35 448.87 1142.23 445.67C1147.14 443.4 1148.11 443.67 1151.12 448.27C1153.26 451.53 1155.12 454.85 1153.64 459C1152.84 461.439 1151.13 463.476 1148.87 464.69C1138.42 470.22 1127.23 471.83 1115.57 470.81C1110.08 470.408 1104.72 468.937 1099.8 466.48C1088.23 460.48 1082.44 450.72 1081.89 438.03C1081.43 427.43 1081.65 416.79 1081.83 406.17C1082.12 388.04 1094.45 374.82 1112.83 372.66C1119.37 371.757 1126.01 371.983 1132.47 373.33C1147.13 376.68 1155.92 386.26 1158.04 401.15C1158.12 401.68 1158.27 402.21 1158.39 402.74L1158.42 427ZM1121.5 414.58C1125.34 414.58 1129.18 414.58 1133.02 414.58C1134.41 414.58 1135.02 414.08 1135.02 412.66C1135.02 410.47 1135.02 408.28 1135.02 406.09C1134.77 399.09 1130.81 394.42 1123.83 393.53C1114.99 392.4 1108.49 396.95 1108.31 406.32C1108.31 408.32 1108.38 410.32 1108.31 412.32C1108.24 414.32 1108.98 414.68 1110.73 414.63C1114.36 414.54 1117.99 414.63 1121.63 414.63M550.94 450.08C550.94 454.88 550.94 459.67 550.94 464.47C550.94 467.74 549.23 469.65 545.94 469.73C540.8 469.85 535.66 469.85 530.52 469.73C527.52 469.66 525.88 467.99 525.52 465.05C525.422 464.234 525.378 463.412 525.39 462.59C525.39 426.15 525.39 389.71 525.39 353.27C525.39 352.27 525.48 351.35 525.57 350.4C525.661 349.086 526.159 347.833 526.997 346.817C527.834 345.8 528.968 345.071 530.24 344.73C541.51 340.98 553.05 338.73 564.96 339.04C574.31 339.31 583.15 341.54 590.96 346.92C599.96 353.09 605.35 361.68 606.65 372.38C608.104 383.051 608.046 393.874 606.48 404.53C605.133 412.513 601.22 419.838 595.333 425.395C589.446 430.951 581.907 434.436 573.86 435.32C566.71 436.19 559.62 436.18 552.74 433.67C551.21 433.11 550.97 433.8 550.97 435.09C550.97 440.09 550.97 445.09 550.97 450.09M551.76 386.72C551.76 393.84 551.82 400.95 551.76 408.07C551.684 408.806 551.865 409.545 552.274 410.162C552.682 410.778 553.293 411.234 554 411.45C557.77 413.16 561.71 413.2 565.7 412.98C575.05 412.47 581.7 405.62 581.7 396.26C581.65 389.32 582.23 382.38 580.95 375.44C579.95 369.87 577.52 365.51 572.28 363.07C566.1 360.19 559.79 360.56 553.44 362.48C552 362.92 551.83 363.88 551.83 365.16C551.83 372.34 551.83 379.53 551.83 386.72M990.88 407.68V353.2C990.88 347.51 992.16 345.81 997.53 344.12C1008.07 340.81 1018.82 338.77 1029.89 339.02C1040.56 339.26 1050.51 341.93 1058.99 348.8C1062.66 351.705 1065.72 355.31 1067.99 359.406C1070.25 363.501 1071.69 368.007 1072.2 372.66C1073.59 382.863 1073.59 393.207 1072.2 403.41C1069.71 420.03 1058.55 431.35 1041.9 434.84C1034.24 436.631 1026.23 436.285 1018.75 433.84C1016.93 433.2 1016.51 433.69 1016.52 435.49C1016.58 444.88 1016.52 454.27 1016.52 463.65C1016.52 468.06 1014.83 469.8 1010.52 469.82C1006.21 469.84 1001.74 469.82 997.35 469.82C992.96 469.82 991 467.96 990.95 463.44V407.68H990.88ZM1017.3 386.68C1017.3 393.87 1017.35 401.07 1017.3 408.26C1017.24 408.929 1017.4 409.6 1017.76 410.166C1018.12 410.731 1018.67 411.159 1019.3 411.38C1023.05 413.15 1026.99 413.22 1030.99 413.02C1040.48 412.57 1047.11 405.71 1047.2 396.24C1047.2 391.65 1047.2 387.05 1047.2 382.46C1047.09 378.853 1046.5 375.277 1045.43 371.83C1044.93 370.001 1044.04 368.302 1042.81 366.852C1041.59 365.402 1040.07 364.234 1038.35 363.43C1032.26 360.33 1025.94 360.58 1019.52 362.26C1019.17 362.305 1018.84 362.419 1018.54 362.595C1018.23 362.771 1017.97 363.006 1017.76 363.285C1017.55 363.564 1017.39 363.882 1017.31 364.221C1017.22 364.561 1017.2 364.914 1017.25 365.26C1017.35 372.39 1017.25 379.51 1017.25 386.64M620.67 404C620.67 384.127 620.67 364.253 620.67 344.38C620.67 339.87 622.31 338.19 626.88 338.22C630.17 338.22 633.47 337.94 636.74 338.49C639.137 338.841 641.35 339.98 643.028 341.727C644.707 343.474 645.756 345.731 646.01 348.14C646.68 354.77 646.15 361.43 646.28 368.07C646.28 369.85 646.34 371.63 646.28 373.41C646.22 374.92 646.61 375.56 648.28 375.09C652.79 373.913 657.406 373.193 662.06 372.94C679.57 371.62 693.6 381.87 697.36 398.94C698.257 402.877 698.713 406.902 698.72 410.94C698.72 428.56 698.72 446.17 698.72 463.78C698.72 467.91 696.98 469.7 692.89 469.78C690.277 469.82 687.67 469.82 685.07 469.78C683.484 469.791 681.913 469.485 680.447 468.881C678.98 468.277 677.65 467.386 676.532 466.261C675.415 465.136 674.533 463.799 673.938 462.329C673.344 460.859 673.049 459.286 673.07 457.7C673.03 442.76 673.03 427.823 673.07 412.89C673.18 409.94 672.842 406.99 672.07 404.14C670.58 399.3 667.27 396.63 662.32 395.88C657.753 395.324 653.121 395.636 648.67 396.8C646.77 397.23 646.18 398.17 646.19 400.09C646.25 420.65 646.25 441.207 646.19 461.76C646.19 462.58 646.19 463.41 646.19 464.23C645.92 467.97 644.19 469.72 640.43 469.77C635.697 469.83 630.963 469.83 626.23 469.77C622.36 469.77 620.61 467.91 620.61 464.04C620.61 444.04 620.61 424.04 620.61 404.04M712.11 420.9C712.34 416.11 711.69 409.9 712.44 403.79C714.25 388.93 722.44 379.32 736.71 375.09C748.207 371.481 760.589 371.879 771.83 376.22C784.96 381.32 791.83 391.28 792.94 405.22C793.75 415.47 793.32 425.76 793.21 436.03C793.1 446.3 789.95 455.71 781.73 462.71C775.56 467.97 768.2 470.4 760.32 471.41C751.862 472.605 743.242 471.803 735.15 469.07C721.09 464.22 712.32 452.14 712.15 437.29C712.08 432.29 712.15 427.29 712.15 420.92M739.09 421.17C739.09 426.71 739.02 431.17 739.09 435.61C739.24 443.46 742.92 447.98 750.52 448.94C759.52 450.09 767.33 446.94 767.61 436C767.84 426.9 767.77 417.79 767.61 408.68C767.48 401.25 763.61 396.51 757.05 395.21C755.082 394.907 753.084 394.843 751.1 395.02C744.63 395.33 740.25 399.44 739.4 405.84C738.69 411.3 739.29 416.79 739.06 421.17M949.33 430C942.26 430 935.2 430.06 928.13 430C926.35 430 925.61 430.66 925.55 432.33C925.48 434.65 924.85 436.94 925.17 439.33C926.03 445.69 930.7 449.95 937.25 450.47C944.87 451.07 951.93 449.19 958.72 445.95C964.08 443.39 965.15 443.69 968.34 448.77C970.47 452.15 972.24 455.62 970.34 459.77C969.662 461.663 968.347 463.261 966.62 464.29C950.1 472.64 933.13 474.29 916.17 466.17C905.61 461.17 899.94 451.89 899.05 440.31C898.175 427.942 898.175 415.528 899.05 403.16C899.94 389.24 909.15 378.21 923.05 374.24C932.585 371.417 942.731 371.393 952.28 374.17C965.28 377.96 972.71 386.96 974.86 400.17C976.18 408.39 975.71 416.71 975.56 424.99C975.49 428.5 973.56 430.04 969.93 430.05H949.33M938.53 414.63C942.43 414.63 946.34 414.63 950.24 414.63C951.52 414.63 952.14 414.21 952.1 412.85C952.04 410.73 952.16 408.6 952.05 406.49C951.68 399.21 947.67 394.49 940.68 393.59C933.46 392.64 926.55 395.44 925.29 404.53C924.91 407.26 925.19 410 925.07 412.73C925 414.17 925.63 414.65 927.02 414.63C930.86 414.58 934.69 414.63 938.53 414.63ZM808 424.22C808 411.407 808 398.593 808 385.78C808 381.44 809.42 379.66 813.53 378.29C823.791 374.744 834.564 372.903 845.42 372.84C855.95 372.84 866.07 374.68 874.42 381.84C881.12 387.59 884.22 395.18 885.56 403.68C885.929 406.464 886.08 409.273 886.01 412.08C886.01 429.28 886.01 446.48 886.01 463.68C886.01 468.09 884.37 469.77 879.91 469.74C876.56 469.74 873.19 470.04 869.85 469.5C864.28 468.59 860.67 464.5 860.65 458.86C860.59 444.26 860.65 429.67 860.65 415.07C860.731 411.783 860.479 408.496 859.9 405.26C858.58 398.85 854.36 395.26 847.84 394.97C843.934 394.825 840.022 395.056 836.16 395.66C834.16 395.97 833.61 396.85 833.62 398.77C833.667 419.73 833.667 440.697 833.62 461.67C833.62 462.49 833.62 463.32 833.62 464.13C833.571 465.423 833.022 466.646 832.09 467.543C831.158 468.44 829.914 468.941 828.62 468.94C823.34 469.04 818.05 469.05 812.77 468.94C809.77 468.88 808 466.85 807.99 463.67C807.99 450.51 807.99 437.353 807.99 424.2"
                          fill="#5F259F"
                        />
                        <path
                          d="M350 388.34C350 395.95 349.95 403.55 350 411.15C350.093 411.889 349.908 412.635 349.481 413.245C349.054 413.855 348.416 414.285 347.69 414.45C342.806 416.129 337.623 416.756 332.48 416.29C323.73 415.46 318.84 410.29 318.1 401.42C317.42 393.28 317.92 385.13 317.78 376.98C317.72 372.98 317.78 369.04 317.78 365.07C317.78 363.42 318.32 362.75 320.05 362.76C329.24 362.82 338.43 362.84 347.61 362.76C349.61 362.76 350.03 363.57 350.02 365.34C349.96 373.01 350.02 380.68 350.02 388.34"
                          fill="#5F259F"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_4_7">
                        <rect width="1366" height="768" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
                <Button variant="outline" size="lg">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 512 193"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M393.8 51.6C395.8 50 396.8 49.2 397.8 48.4C411.7 36.6 429.5 37.9 441.4 51.9C442.6 53.3 443.2 53.4 444.4 52.2C445.2 51.3 446.1 50.6 446.9 49.7C456.2 40.6 468.5 37.9 480 43C492.1 48.4 498.6 57.9 498.7 71.2C498.9 99.9 498.8 128.5 498.8 157.2C498.8 167.4 492.5 173.8 482.4 173.8C478.4 173.8 474.4 173.5 470.4 173.9C466.3 174.3 465.1 173 465.1 168.7C465.3 140.7 465.2 112.7 465.2 84.7C465.2 83.5 465.2 82.4 465.2 81.2C465.1 74.7 462.5 72 456.3 71.7C450.7 71.4 446.8 74.8 446.2 80.5C446.1 81.8 446.2 83.2 446.2 84.5C446.2 108.7 446.2 132.8 446.2 157C446.2 167.6 440.1 173.8 429.5 173.7C424.1 173.6 416.8 176.1 413.7 172.6C411 169.6 412.8 162.5 412.8 157.2C412.8 132.4 412.8 107.5 412.8 82.7C412.8 73.9 407.1 69.4 399.7 72.4C395.1 74.3 393.6 78 393.6 82.8C393.7 106 393.6 129.1 393.6 152.3C393.6 154.1 393.6 156 393.6 157.8C393.3 167.5 387.1 173.6 377.5 173.7C373.5 173.8 369.5 173.4 365.5 173.8C361.2 174.2 359.9 173 360 168.4C360.2 129.1 360.1 89.8 360.1 50.4C360.1 48.7 360.2 47.1 360.1 45.4C359.9 43.2 360.8 42.5 363 42.5C372.2 42.6 381.3 42.6 390.5 42.5C392.8 42.5 393.9 43.1 393.7 45.6C393.5 47.4 393.7 49 393.8 51.6Z"
                      fill="#02B9EF"
                    />
                    <path
                      d="M181.8 105.8C181.8 119.5 181.8 133.1 181.8 146.8C181.7 164.6 172.4 173.8 154.6 173.9C146.8 173.9 138.9 174 131.1 173.9C115.3 173.7 103.7 163.2 102.9 147.4C102.3 136.1 102.2 124.7 102.8 113.4C103.6 97.2 116 85.8 132.4 85.6C136.7 85.5 141.1 85.6 145.4 85.6C149.6 85.5 151.2 83.1 151.1 79.1C151.1 75.1 149.3 73.3 145.3 73.5C140.8 73.6 136.3 73.6 131.8 73.5C120.8 73.3 114.7 67.3 114.8 56.5C114.8 52.1 112.8 46.2 115.7 43.6C118.2 41.4 123.9 42.8 128.2 42.8C139.4 42.7 150.5 42.8 161.7 42.8C173.6 42.8 181.7 50.9 181.8 62.9C181.9 77.1 181.8 91.5 181.8 105.8ZM151.2 128.5C151.2 126.8 151.2 125.2 151.2 123.5C151.2 113.3 151.2 113.3 141 113.7C135.9 113.9 133.1 116.5 133 121.8C132.9 126 132.9 130.1 133 134.3C133.1 141.5 136.3 143.4 146.7 143.7C154.4 143.9 150.5 138.5 151.2 135.5C151.6 133.3 151.1 130.8 151.2 128.5ZM270.8 94.9C270.8 110.2 271 125.6 270.7 140.9C270.5 152.7 267.7 163.4 256.3 169.7C251.7 172.2 246.7 173.6 241.5 173.7C230 173.9 218.5 173.7 207 173.9C204.2 173.9 203.6 172.9 203.7 170.4C203.9 166.2 203.6 162.1 203.8 157.9C204 149.9 210.1 143.8 218.1 143.5C223.3 143.3 228.4 143.4 233.6 143.5C237.8 143.5 240.1 141.8 240.1 137.3C240.1 132.7 237.9 131.1 233.7 131C226.7 130.8 219.7 131.8 212.8 129.8C200.9 126.3 192.2 116.4 191.9 104.1C191.3 84.6 191.7 65.1 191.6 45.6C191.6 43.4 192.3 42.7 194.5 42.8C202.7 42.9 210.8 43 219 42.8C222.6 42.7 222.1 44.7 222.1 46.9C222.1 61.6 222.1 76.2 222.1 90.9C222.1 97.3 225.1 100.7 230.7 100.9C237.3 101.1 240.2 98.4 240.2 91.7C240.2 76.9 240.3 62 240.1 47.2C240.1 43.7 241 42.7 244.5 42.8C251.8 43.1 259.2 43.2 266.5 42.8C270.5 42.6 271.1 44.1 271 47.6C270.7 63.3 270.8 79.1 270.8 94.9ZM16 117.6C16 101.3 16 84.9 16 68.6C16 52.6 25.8 42.6 41.9 42.8C52.4 42.9 62.9 41.6 73.3 43.6C86.6 46.2 95 56.5 95.1 70.2C95.2 84.7 95.1 99.2 95.1 113.7C95.1 131.9 84.4 143 66.2 143.5C60.7 143.7 55.2 143.6 49.7 143.5C47.2 143.4 46.1 144.2 46.2 146.9C46.4 150.9 46.3 154.9 46.2 158.9C46 167.5 39.9 173.7 31.4 173.8C26.4 173.9 20.1 175.9 16.9 173C13.9 170.3 16.1 163.9 16 159.1C15.9 145.3 16 131.4 16 117.6ZM46.2 93.1C46.2 96.3 46.2 99.4 46.2 102.6C46.2 113.9 46.2 113.9 57.5 112.9C62.4 112.5 64.7 110.1 64.8 105.2C64.9 99.6 64.6 93.9 64.9 88.3C65.5 72.1 62.5 73.7 49.3 73.6C46.9 73.6 46.1 74.3 46.1 76.7C46.3 82.1 46.2 87.6 46.2 93.1Z"
                      fill="#06306F"
                    />
                    <path
                      d="M299.1 117.8C299.1 104.5 299 91.1 299.2 77.8C299.2 74.7 298.5 73.4 295.1 73.5C290.6 73.7 284.6 75 282.1 72.8C279 69.9 281.4 63.7 281 58.9C281 58.6 281 58.2 281 57.9C281 53.2 279.5 47.7 281.5 44.2C283.5 40.7 289.6 42.9 293.9 41.8C302.4 39.6 308.8 34.7 314 27.9C317.6 23.3 322.1 20 327.9 18.9C331 18.3 332.9 18.7 332.7 22.7C332.4 28.3 332.7 34 332.6 39.7C332.5 42.1 333.4 42.9 335.8 42.8C339.8 42.7 343.8 42.9 347.8 42.7C350.2 42.6 351 43.5 350.9 45.9C350.8 54.1 350.8 62.2 350.9 70.4C350.9 72.7 350.3 73.9 347.8 73.6C347.3 73.5 346.8 73.6 346.3 73.6C341.9 74 335.8 71.6 333.5 74.6C331.3 77.4 332.7 83.2 332.7 87.7C332.7 114.9 332.6 142 332.8 169.2C332.8 173 331.8 174.2 328 173.9C324.4 173.6 320.7 173.9 317 173.8C306.2 173.4 299.1 166.1 299.1 155.3C299.1 142.8 299.1 130.3 299.1 117.8Z"
                      fill="#02B9EF"
                    />
                  </svg>
                </Button>
              </div>
            </TabsContent>
            <TabsContent
              value="card"
              className="space-y-2 grid grid-flow-row gap-1 grid-cols-2"
            >
              <Button
                size="lg"
                variant="outline"
                className="col-span-2 flex gap-2 justify-start border-2"
              >
                <PlusIcon />
                Add new Card
              </Button>
              <Label htmlFor="card">Card Number</Label>
              <Input
                className="col-span-2"
                placeholder="XXXXXXXXXX1234"
                id="card"
              />
              <Label htmlFor="name">Holder</Label>
              <Input className="col-span-2" id="name" placeholder="Name" />
              <div className="col-span-1">
                <Label htmlFor="date">Expiry Date</Label>
                <Input type="date" id="date" placeholder="01/22" />
              </div>
              <div className="col-span-1">
                <Label htmlFor="cvv">CVV</Label>
                <Input placeholder="XXX" id="cvv" />
              </div>
              <Button className="col-span-1">
                <span>Pay Now</span>
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}