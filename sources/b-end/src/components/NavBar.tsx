// TODO: PseudoRouter - tambah fnHandler (2)
import { SyntheticEvent } from "react";
import { PageName } from "../config/constant";

// TODO: PseudoRouter - tambah fnHandler (3)
// Umumnya dibuat dengan menggunakan suatu interface
interface Props {
  // Sebenarnya apabila ingin sangat detil
  // bisa menggunakan Dispatch type dari React TS

  // Namun bisa kita simplifikasi
  // dengan mendefinisikan bahwa fnHandler
  // adalah sebuah fungsi yang tidak akan return apapun

  // Ingat bahwa fnHandler ini sebenarnya adalah
  // setCurrentPage, yang membutuhkan parameter berupa type PageName

  // Pada line ini artinya adalah
  // - interface Props memiliki sebuah object dengan nama fnHandler
  // - yang berupa suatu fungsi yang tidak mengembalikan apapun
  // - menerima suatu parameter dengan nama pageName, yang bertipe PageName
  fnHandler: (pageName: PageName) => void;
}

// TODO: PseudoRouter - tambah fnHandler (4)
// Selanjutnya untuk Props yang ada di NavBar ini
// Akan menggunakan interface Props yang sudah didefinisikan di atas
const NavBar = ({ fnHandler }: Props) => {
  // TODO: PseudoRouter - tambah fnHandler (5)
  // Di sini kita akan membuat sebuah fungsi yang memudahkan kita untuk memanggil fnHandler
  // Ingat juga bahwa karena ini adalah anchor, kita harus preventDefault agar tidak terjadi
  // refresh halaman

  // Loh eventnya kok berbeda dengan yang sebelumnya?
  // Ya, karena ini adalah React, dan memiliki banyak tipe Event, sehingga
  // Kita pun harus menyesuaikan event yang dimiliki !

  // Untuk anchorOnClick ini karena kita hanya ingin menggunakan preventDefault saja
  // Maka kita bisa menggunakan SyntheticEvent

  // https://reactjs.org/docs/events.html
  const anchorOnClickHandler = (event: SyntheticEvent, pageName: PageName) => {
    event.preventDefault();
    fnHandler(pageName);
  };

  return (
    <>
      <nav>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            listStyle: "none",
            paddingLeft: "0",
          }}
        >
          <li>
            {/* TODO: PseudoRouter - tambah fnHandler (6a) */}
            {/* Gunakan fungsi anchorOnClickHandler di sini */}
            <a
              href="#"
              onClick={(e) => anchorOnClickHandler(e, PageName.COUNTER_PAGE)}
            >
              Counter
            </a>
          </li>
          <li>
            {/* TODO: PseudoRouter - tambah fnHandler (6b) */}
            {/* Gunakan fungsi anchorOnClickHandler di sini */}
            <a
              href="#"
              onClick={(e) => anchorOnClickHandler(e, PageName.FORM_PAGE)}
            >
              Form
            </a>
          </li>
          <li>
            {/* TODO: PseudoRouter - tambah fnHandler (6c) */}
            {/* Gunakan fungsi anchorOnClickHandler di sini */}
            <a
              href="#"
              onClick={(e) => anchorOnClickHandler(e, PageName.TABLE_PAGE)}
            >
              Table
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
