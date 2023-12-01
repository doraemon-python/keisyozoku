import React from 'react'
import ExportPoints from './ExportPoints'
import useCreateDeleteMe from './hooks/useCreateDeleteMe'

const DisplayScores = ({ subjectAndPointList, setSubjectAndPointList }) => {
  const createDeleteMe = useCreateDeleteMe(subjectAndPointList, setSubjectAndPointList);

  return (
    <div className='List'>
      {subjectAndPointList.length ? (
        subjectAndPointList.map((item, index) =>
          <ExportPoints
            // TODO: 同じ教科を複数登録させないようにする。
            key={item.subject + String(index)}
            subjectAndPoint={item}
            deleteMe={createDeleteMe(index)}
          />
        )) : (
        <p style={{ color: "gray", borderBottom: "1px solid black" }}>まだ点数が保存されていません</p>
      )}
    </div>
  )
}

export default DisplayScores