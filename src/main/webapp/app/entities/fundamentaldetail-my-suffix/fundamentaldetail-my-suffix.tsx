import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './fundamentaldetail-my-suffix.reducer';
import { IFundamentaldetailMySuffix } from 'app/shared/model/fundamentaldetail-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFundamentaldetailMySuffixProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class FundamentaldetailMySuffix extends React.Component<IFundamentaldetailMySuffixProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { fundamentaldetailList, match } = this.props;
    return (
      <div>
        <h2 id="fundamentaldetail-my-suffix-heading">
          <Translate contentKey="risingarjunApp.fundamentaldetail.home.title">Fundamentaldetails</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="risingarjunApp.fundamentaldetail.home.createLabel">Create new Fundamentaldetail</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          {fundamentaldetailList && fundamentaldetailList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th>
                    <Translate contentKey="global.field.id">ID</Translate>
                  </th>
                  <th>
                    <Translate contentKey="risingarjunApp.fundamentaldetail.concept">Concept</Translate>
                  </th>
                  <th>
                    <Translate contentKey="risingarjunApp.fundamentaldetail.details">Details</Translate>
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {fundamentaldetailList.map((fundamentaldetail, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${fundamentaldetail.id}`} color="link" size="sm">
                        {fundamentaldetail.id}
                      </Button>
                    </td>
                    <td>
                      <Translate contentKey={`risingarjunApp.Fundamental.${fundamentaldetail.concept}`} />
                    </td>
                    <td>{fundamentaldetail.details}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${fundamentaldetail.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${fundamentaldetail.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${fundamentaldetail.id}/delete`} color="danger" size="sm">
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
              <Translate contentKey="risingarjunApp.fundamentaldetail.home.notFound">No Fundamentaldetails found</Translate>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ fundamentaldetail }: IRootState) => ({
  fundamentaldetailList: fundamentaldetail.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FundamentaldetailMySuffix);
