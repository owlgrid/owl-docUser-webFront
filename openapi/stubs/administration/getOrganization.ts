import { constants } from "@owlgrid-dev/constants";
import { generateName } from "@owlgrid-dev/generators";
import { db } from "../connectors/database";
import { AdministrationOrganizationsGetResponse, uid } from "@owlgrid-dev/types";

/**
 * Get organization
 * @param objectId Object uid
 * @param properties List of properties
 * @returns Resource name and object
 */
export const getOrganization = async (objectId: uid, properties: string[]): Promise<{ data: AdministrationOrganizationsGetResponse, name: string }> => {
    // Check that the user is authorized to do the action
    // TODO or on the gateway?

    // Final object data
    let data: AdministrationOrganizationsGetResponse;

    // Run query to fetch database
    const dataRaw = await db.getDocument(constants.administration.organizations.collection_id, objectId, properties);

    // Extract object
    data = dataRaw.data as AdministrationOrganizationsGetResponse;

    // Generate resource name
    const name = generateName(constants.administration.name, constants.administration.organizations.name, objectId);

    // Return result
    return {
        name,
        data
    };
};