import styled from 'styled-components';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from '../molecules/Table';
import IssueHeader from '../molecules/IssueHeader';

const IndexStructure = (props) => {
  const { issues, addNewIssue, deleteChosenIssue, uploadEditIssue } = props;
  const [researchWord, setResearchWord] = useState('');
  const [deleteList, setDeleteList] = useState([]);

  const setNewResearchWord = (word) => {
    const filterWord = word.toLowerCase();
    setResearchWord(filterWord);
  };

  const changeDeleteList = (newIssue, isClicked) => {
    let newDeleteIssues = [...deleteList];
    if (isClicked) {
      newDeleteIssues.push(newIssue);
    } else {
      newDeleteIssues = newDeleteIssues.filter((issue) => {
        return !Object.is(newIssue, issue);
      });
    }
    setDeleteList(newDeleteIssues);
  };

  const submitDeleteIssue = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < deleteList.length; i++) {
      deleteChosenIssue(deleteList[i]);
    }
  };

  const submitAddNewIssue = (newIssue) => {
    addNewIssue(newIssue);
  };

  return (
    <Container>
      <IssueHeader
        setNewResearchWord={setNewResearchWord}
        submitDeleteIssue={submitDeleteIssue}
        submitAddNewIssue={submitAddNewIssue}
      />
      <Table
        issues={issues}
        researchWord={researchWord}
        changeDeleteList={changeDeleteList}
        uploadEditIssue={uploadEditIssue}
      />
    </Container>
  );
};

const Container = styled.div`
  max-width: 896px;
  margin: 0 auto;
`;

IndexStructure.propTypes = {
  issues: PropTypes.arrayOf().isRequired,
  addNewIssue: PropTypes.func.isRequired,
  deleteChosenIssue: PropTypes.func.isRequired,
  uploadEditIssue: PropTypes.func.isRequired,
};

export default IndexStructure;
