import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class PaginationView extends React.Component {
    
         
    onChange(e) {


    }
    
    renderPagination(){
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(50 / 10); i++) {
            pageNumbers.push(
                <PaginationItem key={i}>
                    <PaginationLink href="#">
                        {i}
                    </PaginationLink>
                </PaginationItem>      
            );
        }
        return pageNumbers
    }
    render(){
        return (
            <Pagination aria-label="Page navigation  " class="justify-content-center">
                <PaginationItem disabled>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                {this.renderPagination()}
                <PaginationItem>
                <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>
        );
    }
}

export default PaginationView