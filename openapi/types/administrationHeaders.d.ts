/**
 * The total count of items in the list irrespective of pagination.
 */
export interface GenericTotalSize {
    [k: string]: unknown;
}

/**
 * Token to retrieve the next page of results, or empty if there are no more results in the list.
 */
export interface GenericNextPageToken {
    [k: string]: unknown;
}
