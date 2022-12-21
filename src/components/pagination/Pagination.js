import React from 'react'
import ReactPaginate from 'react-paginate'
import { ArrowLeft, ArrowRight } from '../../assets/icons/Icons'
import "./pagination.scss"
export const Pagination = ({pagecaunts ,cauntpage,paginations}) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center my-5 gap-3"
      forcePage={paginations === 1 ? 0 : paginations -1}
      pageCount={pagecaunts}
      previousLabel={<ArrowLeft />}
      nextLabel={<ArrowRight />}
      previousLinkClassName="page-link page-left bg-primary "
      nextLinkClassName="page-link page-right bg-primary"
      pageClassName='page-items '
      pageLinkClassName='page-links '
      activeClassName='active'
      onPageChange={(item)=>{cauntpage(item.selected + 1)}}
    />
  )
}
