import React from "react";
import TimeDay from "./TimeDay";

function MainContent() {
  return (
    <div>
      <hr />
      <TimeDay />
      <p>
        Cloning an Existing Repository If you want to get a copy of an existing
        Git repository — for example, a project you’d like to contribute to —
        the command you need is git clone. If you’re familiar with other VCS
        systems such as Subversion, you’ll notice that the command is clone and
        not checkout.
      </p>
      <hr />
    </div>
  );
}
export default MainContent;
