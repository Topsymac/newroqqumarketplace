import React from "react";
import GuestPostUser from "../GuestPostUser";

const GuestPostPage = ({ blogData }) => {
  return (
    <>
      <div>
        <div>
          {blogData.map(
            ({
              id,
              img,
              blogUser,
              certified,
              dateText,
              userTag,
              paragraphtext,
            }) => (
              <div key={id}>
                <GuestPostUser
                 
                  id={id}
                  img={img}
                  nameText={blogUser}
                  fontAwesome={certified}
                  dateText={dateText}
                  userTag={userTag}
                  paragraphtext={paragraphtext}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default GuestPostPage;
