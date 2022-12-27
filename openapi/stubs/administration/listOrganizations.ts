import { constants } from "@owlgrid-dev/constants";
import { generateName } from "@owlgrid-dev/generators";
import { ListQueryParameters, ListResponse } from "@owlgrid-dev/http";
import { db } from "../connectors/database";
import { AdministrationOrganizationsListResponse } from "@owlgrid-dev/types";

/**
 * List organizations
 * @param req query parameters
 * @returns list of organizations
 */
export const listOrganizations = async (req: ListQueryParameters): Promise<ListResponse> => {
    // Check that the user is authorized to do the action
    // TODO or on the gateway?

    const data: AdministrationOrganizationsListResponse[];

    // Run query to fetch database
    const rawData = await db.listDocuments(constants.administration.organizations.collection_id, req);

    // Extract objects and assert type
    data = rawData.data as organizations;

    // Generate resource name
    const name = generateName(constants.administration.name, constants.administration.organizations.name);

    // Return result
    return {
        name,
        total_size: data.totalResults,
        next_page_token: "TODO",
        data: data
    };
};