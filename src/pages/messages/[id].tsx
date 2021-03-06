import React from "react";
import Groups from "../../containers/Groups";
import Messages from "../../containers/Messages";

import { fetchGroups } from "../../store/groups/actions";

const MessagesPage = () => {
  return (
    <div className="main bg-purple-500 lg:px-16">
      <main className="container flex h-full bg-gray-300">
        <div className="lg:w-1/3 hidden lg:block border-r h-full border-gray-400 border-solid">
          <Groups />
        </div>
        <div className="lg:w-2/3 w-full h-full border-r border-gray-400 border-solid">
          <Messages />
        </div>
      </main>
    </div>
  );
};

export default MessagesPage;

MessagesPage.getInitialProps = async ctx => {
  ctx.store.dispatch(fetchGroups("f15f3aa2-bee8-415b-84e7-d93c03d3ff53"));
  return {};
};
