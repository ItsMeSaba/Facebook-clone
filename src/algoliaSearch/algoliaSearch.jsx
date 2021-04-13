import React, { useState } from 'react';
import './algoliaSearch.css';

import { InstantSearch, SearchBox, connectHits } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import { Link } from 'react-router-dom';

// import db from '../firebase/firestore';
// import { useSelector } from 'react-redux';

const algoliaClient  = algoliasearch(
    process.env.REACT_APP_ALGOLIA_APP,
    process.env.REACT_APP_ALGOLIA_API
);

const searchClient = {
    search(requests) {
        if(requests[0].params.query.length === 0) {
            return [];
        }
        
        return algoliaClient.search(requests);
    },
};

// function openChat({ ruid }) {
//     db.collection('user').doc(`${uid}`).collection('chats').doc(`${ruid}`).get();
// }

function AlgoliaSearch({ type }) {
    let Hits;
    // let uid = useSelector(state => state.uid);
    let [query, setQuery] = useState({
        0 : '',
        page : 1,
        query : ''
    });
    
    if(type === 'header') Hits = ({ hits }) => (
        <ul className="searchResultList">
            {
                query.query.length > 0 && hits.map(hit => (
                    <Link 
                        className='searchSuggestion'
                        key={hit.objectID} 
                        to={`/${hit.objectID}`}
                        onClick={() => {
                            setQuery({
                                ...query,
                                query : ''   
                            });
                        }}
                    >
                        { hit.username }
                    </Link>
                ))
            }
        </ul>
    );

    else if(type === 'messanger') Hits = ({ hits }) => (
        <ul className="searchResultList">
            {
                query.query.length > 0 && hits.map(hit => (
                    <Link 
                        className='searchSuggestion'
                        key={hit.objectID} 
                        to={`/messanger/${hit.objectID}`}
                        onClick={() => {
                            setQuery({
                                ...query,
                                query : ''   
                            });
                        }}
                    >
                        { hit.username }
                    </Link>
                ))
            }
        </ul>
    );
    
    let CustomHits = connectHits(Hits);

    return (
        <div className="algoliaSearch">
            <InstantSearch 
                indexName="fbCloneUsers"
                searchClient={searchClient}
                searchState={query}
                onSearchStateChange={setQuery}
            >
                <SearchBox />
                
                <CustomHits />
            </InstantSearch>
        </div>
    )
    
}

export default AlgoliaSearch;