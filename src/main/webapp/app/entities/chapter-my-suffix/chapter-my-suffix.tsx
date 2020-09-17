import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './chapter-my-suffix.reducer';
import { IChapterMySuffix } from 'app/shared/model/chapter-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IChapterMySuffixProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class ChapterMySuffix extends React.Component<IChapterMySuffixProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { chapterList, match } = this.props;
    return (
      <div>
        <h2 id="chapter-my-suffix-heading">
          <Translate contentKey="risingarjunApp.chapter.home.title">Chapters</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="risingarjunApp.chapter.home.createLabel">Create new Chapter</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {chapterList && chapterList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="risingarjunApp.chapter.chapterId">Chapter Id</Translate>
                  </th>
                  <th>
                    <Translate contentKey="risingarjunApp.chapter.chapterTitle">Chapter Title</Translate>
                  </th>
                  <th>
                    <Translate contentKey="risingarjunApp.chapter.course">Course</Translate>
                  </th>
                  <th>
                    <Translate contentKey="risingarjunApp.chapter.subject">Subject</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {chapterList.map((chapter, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${chapter.id}`} color="link" size="sm">
                        {chapter.id}
                      </Button>
                    </td>
                    <td>{chapter.chapterId}</td>
                    <td>{chapter.chapterTitle}</td>
                    <td>{chapter.courseCourse ? <Link to={`course-my-suffix/${chapter.courseId}`}>{chapter.courseCourse}</Link> : ''}</td>
                    <td>
                      {chapter.subjectSubjectTitle ? (
                        <Link to={`subject-my-suffix/${chapter.subjectId}`}>{chapter.subjectSubjectTitle}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${chapter.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${chapter.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${chapter.id}/delete`} color="danger" size="sm">
                          <FontAwesomeIcon icon="trash" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.delete">Delete</Translate>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="alert alert-warning">
              <Translate contentKey="risingarjunApp.chapter.home.notFound">No Chapters found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ chapter }: IRootState) => ({
  chapterList: chapter.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChapterMySuffix);
