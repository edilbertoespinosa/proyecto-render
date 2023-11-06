import React from "react";
import LastMovieInDb from "./LastMovieInDb";
import GenresInDb from "./GenresInDb";
import LastUserInDb from "./LastUserInDb";

function ContentRowCenter() {
  return (
    <div className="row">
      <table width="100%">
        <tbody>
          <tr>
            <td width="50%">
              {/*<!-- Last Movie in DB -->*/}
              <LastMovieInDb />
            </td>
            <td rowSpan={2} align="top" width="50%">
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
