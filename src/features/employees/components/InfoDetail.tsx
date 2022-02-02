import styleClasses from "./InfoDetail.module.css";

interface Props {
  label: string;
  value?: string;
}

const InfoDetail = (props: Props) => {
  const { label, value } = props;
  return (
    <>
      <div>
        <label className={styleClasses.Label}>{label}</label>
      </div>
      <div>
        <span className={styleClasses.Span}>{!value || value.length == 0 ? "-" : value}</span>
      </div>
    </>
  );
};

export default InfoDetail;
