import { useEffect } from "react";
const ExportPoints = ({ id, points, requiredOrElective, index, subjectAndPointList, setSubjectAndPointList, color }) => {
  const deleteSubjectAndPoint = () => {
    //直接stateを変更してはいけない。
    const _subjectAndPointList = [...subjectAndPointList];
    _subjectAndPointList.splice(index, 1);
    setSubjectAndPointList(_subjectAndPointList);
  }
  //点数によって背景色を変更する
  const deleteIfInvalidData = () => {
    if (points < 0 || points > 100 || color === "black") deleteSubjectAndPoint();
  }
  useEffect(() => {
    deleteIfInvalidData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="sub-and-point">
      <p className="subject" style={{ backgroundColor: requiredOrElective }}>{id}:</p>
      <p className="display-point" style={{ backgroundColor: color }}>{points}</p>
      <button className="delete-button" onClick={deleteSubjectAndPoint}>削除</button>
    </div>
  );
}

export default ExportPoints;