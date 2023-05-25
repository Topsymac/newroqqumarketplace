import React from "react";
import GuestPostUser from "../GuestPostUser";

const GuestPostPage = ({blogData}) => {
  console.log(blogData);
    return (
    <>
      <div>
        <div>
          {blogData.map(({ id, img, blogUser, certified, dateText, userTag, paragraphtext }) => (
            <GuestPostUser
              key={id}
              id={id}
              img={img}
              nameText={blogUser}
              fontAwesome={certified}
              dateText={dateText}
              userTag={userTag}
              paragraphtext={paragraphtext}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GuestPostPage;
