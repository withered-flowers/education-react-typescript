// TODO: tablePage - Table Render (1)
// Di sini kita tetap hanya menggunakan useState dan useEffect saja
import { useEffect, useState } from "react";

// TODO: tablePage - Table Render (2)
// Karena data yang ingin diambil adalah data yang sudah fix (id, email, dan body)
// Maka di sini kita akan membuat type-nya untuk digunakan
type Comment = {
  id: number;
  email: string;
  body: string;
};

const TablePage = () => {
  // TODO: tablePage - Table Render (3)

  // Karena pada saat fetch data harus ada yang ditampung
  // maka kita akan mendefinisikan state awalnya

  // Karena data akhirnya berupa Array of Comment (Comment[])
  // Maka state awalnya adalah array kosong ([])
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    // TODO: tablePage - Table Render (4)
    // Di sini kita menggunakan useEffect seperti React versi JS pada umumnya
    (async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );

        if (!response.ok) {
          // Di sini kita sengaja menggunakan response.text
          // Agar ada perbedaan antara bila berhasil (Comment[])
          // dan gagal (string)

          // Apabila pada backendnya juga menghasilkan JSON
          // maka di sini pun ada baiknya dibuat type Error Response
          // agar dapat dicatch dengan baik
          const body = await response.text();
          throw new Error(body);
        }

        // TODO: tablePage - Table Render (5)
        // Di sini kita mendefinisikan bahwa JSON yang diambil
        // akan menghasilkan Array of Comment (Comment[])
        const responseJson: Comment[] = await response.json();

        // Di sini kita akan set state nya
        setComments(responseJson);
      } catch (err) {
        // TODO: tablePage - Table Render (6)
        // Karena err di sini sifatnya adalah "any"
        // dan error di atas berupa string

        // Maka ada baiknya secara typescript kita akan mengecek tipe data
        // dari errornya apakah berupa string atau bukan
        if (typeof err === "string") {
          console.log(err);
        }
      }
    })();
  }, []);

  // TODO: tablePage - Delete Button (1)
  // Pada langkah ini kita akan membuat handler ketika button di-click
  // Perhatikan di sini untuk parameter data, menggunakan type Comment
  const eachRowButtonDeleteOnClickHandler = (data: Comment) => {
    // Logic javascript umum, tidak dibahas di sini yah
    let filteredComments = comments.filter((comment) => comment.id !== data.id);
    setComments(filteredComments);
  };

  return (
    <>
      <p>Ini adalah halaman Table</p>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: tablePage - Table Render (7) */}
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
              <td>
                {/* TODO: tablePage - Delete Button (2) */}
                {/* Tambahkan handler onClick di sini */}
                <button
                  onClick={() => eachRowButtonDeleteOnClickHandler(comment)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TablePage;
