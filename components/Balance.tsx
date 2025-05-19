import getUserBalance from "@/app/actions/getUserBalance";
import { addComas } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();

  return (
    <>
      <h4>Your Balance</h4>
      <h2>{addComas(balance ?? 0)}₸</h2>
    </>
  );
};

export default Balance;
