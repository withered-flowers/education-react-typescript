// TODO: tablePage - Table Render (1)
import { useEffect, useState } from "react";

// TODO: tablePage - Table Render (2)
type Comment = {
  id: number;
  email: string;
  body: string;
};

const TablePage = () => {
  // TODO: tablePage - Table Render (3)
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    // TODO: tablePage - Table Render (4)
    (async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );

        if (!response.ok) {
          const body = await response.text();
          throw new Error(body);
        }

        // TODO: tablePage - Table Render (5)
        const responseJson: Comment[] = await response.json();
        setComments(responseJson);
      } catch (err) {
        // TODO: tablePage - Table Render (6)
        if (typeof err === "string") {
          console.log(err);
        }
      }
    })();
  }, []);

  const eachRowButtonDeleteOnClickHandler = (data: Comment) => {
    console.log(data);
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
          // TODO: tablePage - Table Render (7)
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
              <td>
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
