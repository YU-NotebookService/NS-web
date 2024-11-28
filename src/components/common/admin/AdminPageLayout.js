import React from 'react';

const AdminPageLayout = () => {
  return (
    <>
      <List
        itemText="개의 노트북이 등록되어 있습니다."
        columns={columns}
        currentData={notebookList}
        buttonText="신규 등록"
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        totalElements={totalElements}
      />
    </>
  );
};

export default AdminPageLayout;
