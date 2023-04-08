// src/pages/index.tsx

import { type NextPage } from "next";
import ParticipantsForm from "~/pages/components/ParticipantsForm"
import PassReveal from "./components/PassReveal";


const Home: NextPage = () => {
  return (
    <div className="mb-auto">
        <ParticipantsForm />
        <PassReveal />
    </div>
  )
};

export default Home;
