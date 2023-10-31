import Link from "next/link";
import { GRID_DATA_ITEMS } from "../data";

export default function Layout({ children }) {
  return (
    <div className="lg-w-[1000px] flex-col items-center pt-4 pb-4">
      <div className="w-full bg-slate-100 flex flex-col items-center pb-10 pt-10">
        <div className="title">Josue RUSHANIKA MUSICS</div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          {GRID_DATA_ITEMS.map((gridDataItem) => {
            const { id, attributes } = gridDataItem;

            return (
              <Link href={attributes.href}>
                <div
                  key={id}
                  className={`${attributes.background} w-36 h-36 lg:w-52  lg:h-52
                   flex items-end border-black border-[2px]`}
                >
                  <div
                    className={`font-ranga bg-slate-200/75 w-full text-center mb-2
                      text-sm lg:text-2xl h-[18px] lg:h-[30px]
                  hover:text-white  hover:bg-slate-700/75`}
                  >
                    {attributes.text}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <br />

      {children}
    </div>
  );
}
