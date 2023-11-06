import React from "react";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";
import LastUserInDb from "./LastUserInDb";

function ContentRowCenter() {
  return (
    <div className="row">
      <table>
        <tbody>
          <tr>
            <td>
              {/*<!-- Last Movie in DB -->*/}
              <LastMovieInDb />
            </td>
            <td rowSpan={2} align="top">
              {/*<!-- Genres in DB -->*/}
              <GenresInDb />
            </td>
          </tr>
          <tr>
            <td>
              {/*<!-- Last Movie in DB -->*/}
              <LastUserInDb />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ContentRowCenter;
