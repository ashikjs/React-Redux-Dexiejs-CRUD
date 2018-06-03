import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class PaginationView extends React.Component {
    renderPagination(){
        const {currentPage,totalData,perPage,handlePage} = this.props
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalData / perPage); i++) {
            pageNumbers.push(
                <PaginationItem 
                    key={i}
                    active={
                        currentPage === i ? true : false
                    }
                >
                    <PaginationLink
                        href="javascript:"
                        id={i}
                        onClick={() => handlePage(i)}
                    >
                        {i}
                    </PaginationLink>
                </PaginationItem>      
            );
        }
        return pageNumbers
    }
    render(){
        const { nextPage,totalData,previousPage,perPage,currentPage } = this.props
        const numberOfFirstPage = 1
        const numberOfLastPage = Math.ceil(totalData / perPage)
        return (
            <Pagination aria-label="Page navigation" class="justify-content-center">
                <PaginationItem disabled={ numberOfFirstPage < currentPage ? false : true }>
                    <PaginationLink
                        previous
                        href="javascript:"
                        onClick={numberOfFirstPage < currentPage ? () => previousPage() : ()=>{ return false }}
                    />
                </PaginationItem>
                {this.renderPagination()}
                <PaginationItem disabled={ numberOfLastPage > currentPage ? false : true }>
                    <PaginationLink 
                        next
                        href="javascript:" 
                        onClick={numberOfLastPage > currentPage ? () => nextPage() : ()=>{ return false }}
                    />
                </PaginationItem >
            </Pagination>
        );
    }
}

export default PaginationView