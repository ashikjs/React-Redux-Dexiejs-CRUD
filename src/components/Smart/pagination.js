import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class PaginationView extends React.Component {
    
    renderPagination(){
        const {currentPage,totalData,perPageData,handlePage} = this.props
        const pageNumbers = [];
        console.log()
        for (let i = 1; i <= Math.ceil(totalData / perPageData); i++) {
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
      
        
        return (
            <Pagination aria-label="Page navigation" class="justify-content-center">
                <PaginationItem disabled>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                {this.renderPagination()}
                <PaginationItem>
                    <PaginationLink 
                        next
                        href="#" 
                    />
                </PaginationItem >
            </Pagination>
        );
    }
}

export default PaginationView