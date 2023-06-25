/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
import mock from "../fixtures/db.json";
import page1 from "../fixtures/page1.json";

// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "shanti-local",
//     json_server_link: `http://localhost:8080/`,
//   },
// ];

const getInitialState = (win) => win.store;
const getReducer = (win) => win.reducer;

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React Sprint-4 B26 C4", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }

      cy.visit(url);
      cy.window().its("store").should("exist");

      cy.writeFile("db.json", mock, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });

    it("Should have the title visible in the navbar", () => {
      cy.get(".navbar").should("exist").and("have.class", "css-k008qs");

      cy.get(".navbar")
        .children()
        .eq(0)
        .should("have.class", "chakra-heading")
        .and("have.text", "Chakra UI Job Application");

      cy.then(() => {
        acc_score += 1;
      });
    });

    // it("Should have toggle button to toggle dark and light mode", () => {
    //   cy.get("html").should("have.attr", "data-theme").and("eq", "light");

    //   cy.get(".navbar")
    //     .children()
    //     .eq(2)
    //     .children()
    //     .each((child) => {
    //       cy.wrap(child).should("have.class", "chakra-icon");
    //       cy.get("svg path").should(
    //         "have.attr",
    //         "d",
    //         "M21.4,13.7C20.6,13.9,19.8,14,19,14c-5,0-9-4-9-9c0-0.8,0.1-1.6,0.3-2.4c0.1-0.3,0-0.7-0.3-1 c-0.3-0.3-0.6-0.4-1-0.3C4.3,2.7,1,7.1,1,12c0,6.1,4.9,11,11,11c4.9,0,9.3-3.3,10.6-8.1c0.1-0.3,0-0.7-0.3-1 C22.1,13.7,21.7,13.6,21.4,13.7z"
    //       );
    //     });

    //   cy.get(".navbar").children().eq(2).click();

    //   cy.get("html").should("have.attr", "data-theme").and("eq", "dark");

    //   cy.get(".navbar")
    //     .children()
    //     .eq(2)
    //     .children()
    //     .each((child) => {
    //       cy.wrap(child).should("have.class", "chakra-icon");
    //       cy.get("svg path").eq(0).should("have.attr", "d", "M12 1v2");

    //       cy.get("svg path").eq(1).should("have.attr", "d", "M12 21v2");

    //       cy.get("svg path")
    //         .eq(2)
    //         .should("have.attr", "d", "M4.22 4.22l1.42 1.42");

    //       cy.get("svg path")
    //         .eq(3)
    //         .should("have.attr", "d", "M18.36 18.36l1.42 1.42");

    //       cy.get("svg path").eq(4).should("have.attr", "d", "M1 12h2");

    //       cy.get("svg path").eq(5).should("have.attr", "d", "M21 12h2");

    //       cy.get("svg path")
    //         .eq(6)
    //         .should("have.attr", "d", "M4.22 19.78l1.42-1.42");

    //       cy.get("svg path")
    //         .eq(7)
    //         .should("have.attr", "d", "M18.36 5.64l1.42-1.42");
    //     });

    //   cy.then(() => {
    //     acc_score += 2;
    //   });
    // });

    it("Checks for the initial store state", () => {
      cy.window().then(getInitialState).should("deep.equal", {
        data: [],
        isLoading: false,
        isError: false,
      });
      cy.window().then(getReducer).should("exist");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Checks the reducer function for GET_JOBS_REQUEST state", () => {
      cy.window().then((win) => {
        const reducer = getReducer(win);
        const newState = reducer(
          {
            data: [],
            isLoading: false,
            isError: false,
          },
          { type: "GET_JOBS_REQUEST" }
        );
        expect(newState).to.deep.equal({
          data: [],
          isLoading: true,
          isError: false,
        });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Checks reducer function for GET_JOBS_SUCCESS", () => {
      cy.intercept("GET", "**/jobs?**", (req) => {
        req.reply({
          body: page1,
        });
      }).as("getJobs");

      cy.visit(url);
      cy.wait("@getJobs").then((res) => {
        cy.window().then((win) => {
          const reducer = getReducer(win);
          const newState = reducer(
            {
              data: [],
              isLoading: false,
              isError: false,
            },
            {
              type: "GET_JOBS_SUCCESS",
              payload: res.response.body,
            }
          );

          expect(newState).eql({
            data: res.response.body,
            isLoading: false,
            isError: false,
          });
        });
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Checks reducer function for GET_JOBS_FAILURE", () => {
      cy.window().then((win) => {
        const reducer = getReducer(win);
        const newState = reducer(
          {
            data: [],
            isLoading: false,
            isError: false,
          },
          { type: "GET_JOBS_FAILURE" }
        );

        expect(newState).contain({
          isError: true,
        });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Should show loading skeleton while data is loading", () => {
      cy.intercept("GET", `**/jobs?**`).as("getJobs");

      cy.visit(url);

      cy.get(".job_cards_wrapper").should("exist");

      cy.get(".job_cards_wrapper").children().should("have.length", 4);

      cy.get(".job_cards_wrapper")
        .children()
        .each((child) => {
          cy.wrap(child).should("have.class", "chakra-skeleton");
        });

      cy.get(".pagination_btn_wrapper").should("not.exist");

      cy.wait("@getJobs").then((res) => {
        expect(res.response.statusCode).eql(200);
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Should have pagination buttons visible in the dom", () => {
      cy.visit(url);

      cy.get(".pagination_btn_wrapper")
        .should("exist")
        .within(() => {
          cy.get(".pagination_btn")
            .should("exist")
            .and("have.class", "chakra-button")
            .and("have.length", 3);
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Should show correct jobs information for page - 1", () => {
      cy.intercept("GET", `**/jobs?**`).as("getJobs");
      cy.visit(url);
      cy.wait("@getJobs").then(({ request, response }) => {
        expect(request.url).to.contain("_page=1");
        expect(request.url).to.contain("_limit=4");
        expect(response.statusCode).to.equal(200);
      });

      cy.get(".job_cards_wrapper").children().should("have.length", 4);

      cy.get(".job_cards_wrapper")
        .children()
        .each((child) => {
          cy.wrap(child).should("have.class", "chakra-card css-jv498s");

          cy.wrap(child).children().should("have.length", 3);

          cy.wrap(child)
            .children()
            .eq(0)
            .should("have.class", "chakra-card__header css-1sl53ol");

          cy.get(".chakra-card__header.css-1sl53ol")
            .children()
            .each((child, index) => {
              cy.wrap(child)
                .should("have.class", "chakra-heading")
                .and("have.text", mock.jobs[index].title);
            });

          cy.wrap(child)
            .children()
            .eq(1)
            .should("have.class", "chakra-card__body css-1idwstw");

          cy.get(".job_cards_wrapper").each((child) => {
            cy.wrap(child)
              .find(".chakra-card__body.css-1idwstw")
              .within(() => {
                cy.get(".chakra-heading").each((child, index) => {
                  cy.wrap(child).should("have.text", mock.jobs[index].company);
                });

                cy.get(".location").each((child, index) => {
                  cy.wrap(child).should("have.text", mock.jobs[index].location);
                });

                cy.get(".description").each((child, index) => {
                  cy.wrap(child).should(
                    "contain",
                    mock.jobs[index].description
                  );
                });

                cy.get(".requirements").each((child, index) => {
                  cy.wrap(child).should(
                    "contain",
                    mock.jobs[index].requirements
                  );
                });

                cy.get(".responsibilities").each((child, index) => {
                  cy.wrap(child).should(
                    "contain",
                    mock.jobs[index].responsibilities
                  );
                });
              });
          });

          cy.wrap(child)
            .children()
            .eq(2)
            .should("have.class", "chakra-card__footer css-1a7q9t8");

          cy.get(".chakra-card__footer.css-1a7q9t8")
            .children()
            .each((child) => {
              cy.wrap(child)
                .should("have.class", "chakra-button")
                .and("have.text", "Apply Now");
            });
        });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Should show correct jobs information for page - 3", () => {
      cy.intercept("GET", `**/jobs?**`).as("getJobs");
      cy.visit(url);
      cy.wait("@getJobs").then(({ request, response }) => {
        expect(request.url).to.contain("_page=1");
        expect(request.url).to.contain("_limit=4");
        expect(response.statusCode).to.equal(200);
      });

      cy.intercept("GET", `**/jobs?**`).as("getThirdPageData");

      cy.get(".pagination_btn_wrapper")
        .should("exist")
        .within(() => {
          cy.get(".pagination_btn").eq(2).click();
          cy.wait("@getThirdPageData").then(({ request, response }) => {
            expect(request.url).to.contain("_page=3");
            expect(request.url).to.contain("_limit=4");
            expect(response.statusCode).to.equal(200);
          });
        });

      cy.get(".job_cards_wrapper").children().should("have.length", 2);

      cy.get(".job_cards_wrapper")
        .children()
        .each((child) => {
          cy.wrap(child).should("have.class", "chakra-card css-jv498s");

          cy.wrap(child).children().should("have.length", 3);

          cy.wrap(child)
            .children()
            .eq(0)
            .should("have.class", "chakra-card__header css-1sl53ol");

          cy.get(".chakra-card__header.css-1sl53ol")
            .children()
            .each((child, index) => {
              cy.wrap(child)
                .should("have.class", "chakra-heading")
                .and("have.text", mock.jobs[index + 8].title);
            });

          cy.wrap(child)
            .children()
            .eq(1)
            .should("have.class", "chakra-card__body css-1idwstw");

          cy.get(".job_cards_wrapper").each((child) => {
            cy.wrap(child)
              .find(".chakra-card__body.css-1idwstw")
              .within(() => {
                cy.get(".chakra-heading").each((child, index) => {
                  cy.wrap(child).should(
                    "have.text",
                    mock.jobs[index + 8].company
                  );
                });

                cy.get(".location").each((child, index) => {
                  cy.wrap(child).should(
                    "have.text",
                    mock.jobs[index + 8].location
                  );
                });

                cy.get(".description").each((child, index) => {
                  cy.wrap(child).should(
                    "contain",
                    mock.jobs[index + 8].description
                  );
                });

                cy.get(".requirements").each((child, index) => {
                  cy.wrap(child).should(
                    "contain",
                    mock.jobs[index + 8].requirements
                  );
                });

                cy.get(".responsibilities").each((child, index) => {
                  cy.wrap(child).should(
                    "contain",
                    mock.jobs[index + 8].responsibilities
                  );
                });
              });
          });

          cy.wrap(child)
            .children()
            .eq(2)
            .should("have.class", "chakra-card__footer css-1a7q9t8");

          cy.get(".chakra-card__footer.css-1a7q9t8")
            .children()
            .each((child) => {
              cy.wrap(child)
                .should("have.class", "chakra-button")
                .and("have.text", "Apply Now");
            });
        });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Should have a modal open when Apply Now button is clicked for job - 1", () => {
      cy.visit(url);

      cy.get(".chakra-card__footer.css-1a7q9t8").children().eq(0).click();

      cy.get(".chakra-modal__content-container.css-1u2cvaz").should("exist");

      cy.get(".chakra-modal__content-container.css-1u2cvaz").within(() => {
        cy.get(".chakra-modal__header").should(
          "have.text",
          "Software Engineer"
        );

        cy.get(".apply_message").should(
          "contain",
          "Congratulation on Your Application Submitted At ABC Tech For Software Engineer Role."
        );
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Should have a modal open when Apply Now button is clicked for job - 2", () => {
      cy.visit(url);

      cy.get(".chakra-card__footer.css-1a7q9t8").children().eq(3).click();

      cy.get(".chakra-modal__content-container.css-1u2cvaz").should("exist");

      cy.get(".chakra-modal__content-container.css-1u2cvaz").within(() => {
        cy.get(".chakra-modal__header").should(
          "have.text",
          "Front-end Developer"
        );

        cy.get(".apply_message").should(
          "contain",
          "Congratulation on Your Application Submitted At GHI Web Solutions For Front-end Developer Role."
        );
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be changed
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
