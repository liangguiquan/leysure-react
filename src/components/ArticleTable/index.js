import React from 'react';
import styles from './index.css';
import { Table, Button, message, Spin } from 'antd';
import withRouter from 'umi/withRouter';
import { deleteArticleById } from '../../services/articles';
import { connect } from 'dva';
import loading from '../../assets/images/loading.png';


function ArticleTable(props) {
  // console.log(props);
  const columns = [
    {
      title: '编号',
      dataIndex: 's_no'
    },
    {
      title: '标题',
      dataIndex: 'title'
    },
    {
      title: '标签',
      dataIndex: 'tag'
    },
    {
      title: '封面',
      dataIndex: 'poster_thumb.url',
      render(poster) {
        // console.log(poster);
        return (<img src={poster && poster !== null ? poster: loading} />);
      }
    },
    {
      title: '创建时间',
      dataIndex: 'ctime'
    },
    {
      title: '详情页',
      dataIndex: '',
      render(art) {
        // console.log(art)
        return (<Button type='link' onClick={() => {
          props.history.push(`/management/articleList/${art.s_no}`)
        }}>点击进入</Button>);

      }
    },
    {
      title: '操作',
      dataIndex: '',
      render(art) {
        return (
          <Button onClick={() => {
            handleDelete(art.id);
          }}>删除</Button>
        )
      }
    }
  ]

  const handleDelete = async (id) => {
    // console.log(id);
    const result = await deleteArticleById(id);
    console.log(result);
    if (result.code === 0) {
      // 删除成功
      // 先给提示
      await message.success('删除成功!', 1);
      history.go(0);
    }
    else {
      alert("删除失败");
    }
  }

  return (
    <Spin spinning={props.articles.length > 0 ? false: true}>
      <Table className={styles.table}
        dataSource={props.articles}
        tableLayout='fixed'
        rowKey='id'
        columns={columns}
        pagination={{
          current: +props.current,
          total: +props.total,
          pageSize: +props.pageSize,
          onChange: props.onPageChange
        }
        }
      >
      </Table>
    </Spin>

  )
}

const mapStateToProps = state => ({
    articles: state.articles.result.datas,
    current: state.articles.condition.page,
    total: state.articles.result.total,
    pageSize: state.articles.condition.size
})

const mapDispatchToProps = dispatch => ({
    onPageChange:(newPage)=>{
        dispatch({
            type: 'articles/setCondition',
            payload: {
                page: newPage
            }
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticleTable));



